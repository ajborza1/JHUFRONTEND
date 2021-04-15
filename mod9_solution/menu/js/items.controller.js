(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


// item injected through states resolve
ItemsController.$inject['item']
function ItemsController(item){
	var itemDetail = this;
}


})();