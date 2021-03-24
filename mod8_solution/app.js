
(function () {

'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.factory('MenuSearchService', MenuSearchService)
.directive('foundItems', foundItems);


// directive- 
function foundItems(){


}

// NarrowItDownController should be injected with MenuSearchService
NarrowItDownController.$inject =['MenuSearchService'];
function NarrowItDownController(MenuSearchService){

	var item = this;

	item.found = [];

}


function MenuSearchService(searchTerm){

	var service this;

	var foundItems = [];



	// reaches out to the server (using the $htpp service)
	// to  retrive the list of all themenu items.
	service.getMatchedMenuItems(searchTerm){
		return foundItems;
	}
}




})();