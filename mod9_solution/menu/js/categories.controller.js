(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


// items injected through states resolve
CategoriesController.$inject['items']
function CategoriesController(items){
	var categoryDetails = this;
}



})();