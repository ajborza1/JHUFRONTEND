(function () {
'use strict';

angular.module('Data')
.controller('ItemsController', ItemsController);


// item injected through states resolve
ItemsController.$inject = ['$stateParams', 'item'];
function ItemsController($stateParams, item){
	
    var itemDetail = this;
    itemDetail.name = $stateParams.itemId;
    itemDetail.description = $stateParams.description;
    console.log(itemDetail.name);
    console.log(item);

}




})();