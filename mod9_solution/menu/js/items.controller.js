(function () {
'use strict';

angular.module('Data')
.controller('ItemsController', ItemsController);


// item injected through states resolve
ItemsController.$inject = ['$stateParams', 'item'];
function ItemsController($stateParams, item){

	var itemDetail = this;
	var categoryItem = items[$stateParams.itemId];

	// when i define in html will call here
	itemDetail.name = item.name;
	itemDetail.description = item.description;

}


})();