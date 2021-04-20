(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


// should have two methods
MenuDataService.$inject = ['$http', 'ApiBasePath', '$q', '$timeout'];
function MenuDataService($http, ApiBasePath, $q, $timeout){

	var service = this;
	var categoryList = [];		// categories
	var items = []; 			// items

	// return a list of categories and return a promise
	service.getAllCategories = function(){
	  var deferred = $q.defer();
        $http.get(ApiBasePath + "/categories.json")
        .success(function(response) {
            service.categoryList = response;
            $timeout(function () 
            {
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
            $timeout(function () 
            {
                deferred.resolve(response);
            }, 200);
        })
        return deferred.promise;
    };
}

})();
