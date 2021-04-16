(function () {
'use strict';

angular.module('Data')
.controller('ItemsController', ItemsController);


// item injected through states resolve
ItemsController.$inject = ['$stateParams', 'categoryList'];
function ItemsController($stateParams, categoryList){

	var itemDetail = this;
	var categoryItem = categoryList[$stateParams.itemId];

	// when i define in html will call here
	itemDetail.name = categoryItem.name;
	itemDetail.description = categoryItem.description;

}


})();