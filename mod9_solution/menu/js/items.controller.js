(function () {
'use strict';

angular.module('Data')
.controller('ItemsController', ItemsController);



ItemsController.$inject = ['$stateParams', 'item', '$scope'];
function ItemsController($stateParams, item, $scope) {

    var itemDetail = this;
    itemDetail.item = $stateParams.itemId;
    console.log(itemDetail);
	console.log(item);
	itemDetail.short_name = item.short_name;
	console.log(itemDetail);
    var results = [];
    var desc = "";
    var name = "";
    var short_name = "";
    var price_large = "";
    var price_small = "";

    for (var i = 0; i < item.length; i++)
    {
        desc = "\n" + item[i].description;
        name = "\n" + item[i].name;
        short_name = "\n" + item[i].short_name;
        price_large = "\n" +  item[i].price_large;
        price_large = "\n" +  item[i].price_large;
        price_small = "\n" +  item[i].price_small;

        results.push(desc + " " + name + " " + short_name + " " + price_large + " " + price_small);
        console.log(results);
    }
    $scope.desc = desc;
    $scope.name = name;
    $scope.short_name = short_name;
    $scope.price_large = price_large;
 	$scope.price_small = price_small;
 	$scope.results = results;
    console.log(results);
}


})();