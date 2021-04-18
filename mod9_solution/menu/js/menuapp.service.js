(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


// should have two methods
MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath){

	var service = this;
	var categoryList = [];		// categories
	var items = []; 			// items

	// return a list of categories 
	// and return a promise
	service.getAllCategories = function(){
		return $http({
			method: 'GET',
			url: (ApiBasePath + "/categories.json")
		}).then(function(response){

			service.categoryList = response;
			console.log(service.categoryList);
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
		}).then(function(response){
			service.items = response;
			return service.items;
		});
		return items;
	};

}

})();
