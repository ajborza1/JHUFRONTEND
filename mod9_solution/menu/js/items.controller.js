(function () {
'use strict';

angular.module('Data')
.controller('ItemsController', ItemsController);


// item injected through states resolve
ItemsController.$inject = ['$stateParams', 'item', '$scope'];
function ItemsController($stateParams, item, $scope){
	
	var itemDetail = this;
    itemDetail.name = $stateParams.itemId;
    itemDetail.description = itemDetail.description;
    console.log(itemDetail);

}


})();