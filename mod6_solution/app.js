(function (){

'use strict';

// declare angular module 
angular.module('LunchCheck', [])
.controller('LunchCheckController', function($scope){

// declare an inject property
LunchCheckController.$inject = ['$scope', '$filter'];


	function LunchCheckController($scope){

		$scope.items = "";
		$scope.message = "";

		$scope.results = function(){
		
			var splitString = $scope.items.split(",", 3);

			for(var i = 0; i < splitString.length; i++ ){

				if(splitString.length <= 3){

					$scope.message = "Please Enjoy!";
				}
				else if(splitString.length > 3){

					$scope.message = "Thats two Much!";
				}
				else{
					$scope.message = "You entered nothing!";
				}
			};
		}

	}
});

}());