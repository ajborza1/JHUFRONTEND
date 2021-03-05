(function (){

'use strict';

// declare angular module 
angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);

// declare an inject property
LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope){

		$scope.items = '';
		$scope.message = '';


		$scope.results = function(){
		
			var splitString = $scope.items.split(",");

			if($scope.items == 0){
				$scope.message = "Please enter data first";
				$scope.color = {
					'color': 'red',
					'background-border': 'red'
					 };
				
			}
			else if(splitString.length <= 3){
				$scope.message = "Please Enjoy!";
				$scope.color = {
					'color': 'green',
					'background-border': 'red'
					};
			}
			else if(splitString.length > 3){
				$scope.message = "Thats two Much!";
				$scope.color = {
					'color': 'green',
					'background-border': 'green'
					};
			}
		
		}
	};

}());