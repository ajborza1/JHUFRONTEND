
(function () {
'use strict';

angular.module('Data')
.controller('CategoriesController', CategoriesController);

// items injected through states resolve
CategoriesController.$inject = ['MenuDataService', 'categoryList'];
function CategoriesController(MenuDataService, categoryList){
	
	var categoryDetails = this;
	categoryDetails.categoryList = categoryList;
}

})();