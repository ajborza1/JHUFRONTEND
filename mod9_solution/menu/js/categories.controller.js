
(function () {
'use strict';

angular.module('Data')
.controller('CategoriesController', CategoriesController);

// items injected through states resolve
CategoriesController.$inject = ['items'];
function CategoriesController(items){
	
	var categories = this;
	categories.items = items;
	console.log(categories);
}

})();