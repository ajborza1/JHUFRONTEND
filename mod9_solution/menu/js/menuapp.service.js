(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


// should have two methods
MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath){

	var service = this;

	service.categoryList = [];	// categories
	service.item = []; // items

	// return a list of categories 
	// and return a promise
	service.getAllCategories = function(){
		return $http({
			method: 'GET',
			url: (ApiBasePath + "/categories.json")
		}).then(function(resonse){

			service.categoryList = resonse.data;
			return service.categoryList;
		});
		return categoryList;
	};

	//return an item associated with the category
	// and return a promise
	service.getItemsForCategory = function(categoryShortName){	
		return $http({
			method: 'GET',
			url: (ApiBasePath + "/menu_items.json?category=" + categoryShortName)
		}).then(function(resonse){
			service.item = resonse.data;
			return service.item;
		});
		return items;
	};

}

})();
