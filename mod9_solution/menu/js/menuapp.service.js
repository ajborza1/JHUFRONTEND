(function () {
'use strict';

angular.module('MenuApp')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


// should have two methods
MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuService($http, ApiBasePath){

	var service = this;

	// return a promise which is a result of using the $http service
	service.getAllCategories = function(){


	}


	service.getItemsForCategory = function(categoryShortName){
		
	}

}



})();