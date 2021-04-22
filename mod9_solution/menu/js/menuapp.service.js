// Anthony Borza
// Assignment 9
// Due Date: 4/27/2021
// menuapp.service.js: This class handles the business logic for
// for reaching out to the restraunts website and returning the 
// restaraunts categories and items using the following methods 
// defined below.

(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


// contains two methods that are used to reach out to server
// and retrieve categories and menu items for restaturant 
MenuDataService.$inject = ['$http', 'ApiBasePath', '$q', '$timeout'];
function MenuDataService($http, ApiBasePath, $q, $timeout){

	var service = this;
	var categoryList = [];		// categories
	var items = []; 			// items

	// return a list of categories and returns a promise
    // which is a result of  using the $htpp service
	service.getAllCategories = function(){
	  var deferred = $q.defer();
        $http.get(ApiBasePath + "/categories.json")
        .success(function(response) {
            service.categoryList = response;
            $timeout(function () {
                deferred.resolve(response);
            }, 200);
        })
        return deferred.promise;
    };

	//return an item associated with the category and return a promise
	  service.getItemsForCategory = function (categoryByShortName) {
        var deferred = $q.defer();
        $http.get(ApiBasePath + '/menu_items.json?category=' + categoryByShortName)
        .success(function(response) {
            service.items = response;
            $timeout(function () {
                deferred.resolve(response);
            }, 200);
        })
        return deferred.promise;
    };
}

})();
