// Anthony Borza
// Assignment 9
// Due Date: 4/27/2021
// categories.controller.js: This class handles the business logic for
// returning a list of categories. 

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