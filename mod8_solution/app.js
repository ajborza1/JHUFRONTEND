// Anthony Borza
// Assignment 8
// Due Date: 4/06/2021
// app.js: This class handles the business logic for
// reaching out to a a site using a get request, 
// and pulling the results down via by search term

(function (){

'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);									// foundItems directive


// Declare and create foundItems directive. 
// takes the found array
// provides an on-remove attribute
// parent controller is invoked as a list
function FoundItemsDirective() {

  var ddo = {
   templateUrl: 'foundItems.html',
    scope: {
      found: '<',
      onRemove: '&'
    },
    controller: NarrowItDownController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}

// NarrowItDownController injected with MenuSearchService
NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){

	var list = this;

	// empty array for found items
	list.found = [];

	// holds the serach term
	list.searchTerm = "";

	// calls the getMatchMenuItems and stores
	// the results in a propery called found that
	// is attached it controller isntance
	list.getMatchedMenuItems = function(searchTerm){
		if(list.searchTerm == ""){
			list.found = [];
			return;
		}
		// create a promise for searchTerm
		var promise = MenuSearchService.getMatchedMenuItems(list.searchTerm);

		promise.then(function(response){
			list.found = response;
			console.log(list.found);
		})
		.catch(function(error){
			console.log(error);
		})
	};

	// function to remove items
	list.removeItem = function(itemIndex){
		list.found.splice(itemIndex, 1);
	};
	
	// function to display error message
	// if nothing is found or search item is 
	// left blank
	list.errorMessage = function(){
		if(list.found.length === 0){
			console.log("Nothing found!")
			return true;
		}
		return false;
	}
}

// MenuSearchService function
MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath){

	var service = this;

	// declate an empty array 
	var foundItems = [];
	
	// Reaches out to the server (using the $http service) to 
	// retrieve the list of all the menu items.
	service.getMatchedMenuItems = function(searchTerm){
		return $http({
			method: 'GET',
			url: (ApiBasePath + "/menu_items.json"),
		}).then(function(result){

			var menu = result.data.menu_items;

			// loops through all the menu items to pick out the ones 
			// whose description matches the searchTerm
			// when a search item is found, it pushes it to the foundItems array
			for(var i = 0; i < menu.length; i++){				
				var item = menu[i].short_name.toLowerCase().indexOf(searchTerm.toLowerCase());
				if(item !== -1){
					foundItems.push(menu[i]);
				}
			}
			return foundItems;
		});
	}
}

})();


