
(function (){

'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItemsDirective', FoundItemsDirective);									// foundItems directive



// foundItems directive
function FoundItemsDirective() {

  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      foundItems: '<',
      onRemove: '&'
    },
    controller: NarrowItDownDirectiveController,
    controllerAs: 'found',
    bindToController: true
  };

  return ddo;
}


// function to loop through search items

function NarrowItDownDirectiveController(){
	var found  = this;

	// check to see if item is in list
	found.itemInList = function(){
		for(var i = 0; i < found.items.length; i++){
			
			var foundItems = found.items[i].searchTerm;
		}

	}
}


// NarrowItDownController should be injected with MenuSearchService
NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){

	var list = this;

	//  when found should be stored in found property that is 
	// attached to controller instance
	list.found = [];

	// create a promise for searchTerm
	// call getMatchedMenuItems()

	list.getMatchedMenuItems = function(searchTerm){

		var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

		promise.then(function (resposne){

			list.found = resposne;
		})
		.catch(function (error){

			console.log(error);
		})
	};


	// function to remove items
	list.removeItem = function(itemIndex){
		list.found.removeItem(itemIndex);
	};
}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath){

	var service = this;

	var foundItems = [];
	// reaches out to the server (using the $htpp service)
	// to  retrive the list of all themenu items.

	  service.getMenuItems = function () {
	    var response = $http({
	      method: "GET",
	      url: (ApiBasePath + "/menu_items.json"),
	    });
	    return response;
	  };

	// loop through the menu items to determine
	// which ones whoes description matches the searchTerm
	service.getMatchedMenuItems = function(searchTerm){
		return $http({
			method: 'GET',
			url: (ApiBasePath + "/menu_items.json"),

		}).then(function(result){

			var menu = result.data.menu_items;

			for(var i = 0; i < menu.length; i++){
				var item = menu[i].short_name.indexOf(searchTerm);
				if(item >= 0){
					foundItems.push(item);
				}
			}
			return foundItems;

		});
	}

	service.removeItem = function(itemIndex){
		foundItems.splice(itemIndex, 1);
	};
}

})();