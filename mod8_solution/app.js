
(function (){

'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);									// foundItems directive



// Declare and create foundItems directive. 
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


// NarrowItDownController should be injected with MenuSearchService
// when found should be stored in found property that is 
// attached to controller instance
// create a promise for searchTerm
// call getMatchedMenuItems()
// function to remove items
NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){

	var list = this;

	list.found = [];

	list.searchTerm = "";

	list.getMatchedMenuItems = function(searchTerm){
		if(list.searchTerm == ""){
			list.found = [];
			return;
		}

		var promise = MenuSearchService.getMatchedMenuItems(list.searchTerm);

		promise.then(function(response){

			list.found = response;
			console.log(list.found);
		})
		.catch(function(error){

			console.log(error);
		})
	};

	list.removeItem = function(itemIndex){
		list.found.splice(itemIndex, 1);
	};

	list.errorMessage = function(){

		return list.found.length == 0;
	}


}

// reaches out to the server (using the $htpp service)
// to retrive the list of all themenu items.
// loop through the menu items to determine
// which ones whoes description matches the searchTerm
MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath){

	var service = this;

	var foundItems = [];
	
	service.getMatchedMenuItems = function(searchTerm){
		return $http({
			
			method: 'GET',
			url: (ApiBasePath + "/menu_items.json"),
   	
		}).then(function(result){

			var menu = result.data.menu_items;

			for(var i = 0; i < menu.length; i++){
				
				var item = menu[i].short_name.toLowerCase().indexOf(searchTerm.toLowerCase());

				if(item !== -1){
					foundItems.push(menu[i]);
				}
			}
			console.log(foundItems);
			return foundItems;

		});
	}
}

})();


