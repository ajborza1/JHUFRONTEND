(function () {
'use strict';

angular.module('Data')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['$stateParams', 'item', '$scope'];
function ItemsController($stateParams, item, $scope) {

    var itemDetail = this;
    itemDetail.item = $stateParams.itemId;
    console.log(itemDetail);

    // results array that holds specifics about menu item
    var results = [];

    // variables to hold elements in array
    var desc = "";
    var name = "";
    var short_name = "";
    var price_large = "";
    var price_small = "";

    for(var i = 0; i < item.length; i++)
    {
        // set variables to array elements
        desc = item[i].description;
        name = item[i].name;
        short_name = item[i].short_name;
        price_large = item[i].price_large;
        price_large = item[i].price_large;

        // push the results 
        results.push("Short Name: [" + short_name + " ]" +
                     " Name: [" + name + "]" +
                     " Description: [" + desc + "]" +
                     " Cost: [$ " +  price_large + " ]"
                     );
        console.log(results);
    }
   
    // make variables accessible on html page
    $scope.desc = desc;
    $scope.name = name;
    $scope.short_name = short_name;
    $scope.price_large = price_large;
 	$scope.results = results;
    
    console.log(results);
}


})();