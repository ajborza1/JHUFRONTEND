
// Anthony Borza
// Assignment 6
// Due Date: 3/9/2021
// app.js: contains business logic for handling number of lunch
// items a user can enter in to a textbox. 

(function (){

'use strict';

// declare angular module 
angular.module('LunchCheck', [])
	   .controller('LunchCheckController', LunchCheckController);

// declare an inject property
LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope){

		// scope vairables that are used as the binding part
		// for html and javascript controller
		$scope.items = '';
		$scope.message = '';

		// function is called in html page
		$scope.results = function(){

		var splitString = $scope.items.split(",");
	
			$scope.count = 0;

			// condition to handle empty entries
			if($scope.items == 0){
				$scope.message = "Please enter data first";
				$scope.count = 0;	
				$scope.color = {
					'color': 'red',
					'background-border': 'red'
					 };	
				count = 0;						// count will be 0 when there is nothing entered
			}
			// condition to handle entries that are less than or equal to 3
			else if(splitString.length <= 3){
				$scope.message = "Please Enjoy!";
				$scope.color = {
					'color': 'green',
					'background-border': 'red'
					};
				$scope.count = splitString.length;
			}
			// condition to handle entries greater than 3
			else if(splitString.length > 3){
				$scope.message = "Thats two Much!";
				$scope.color = {
					'color': 'green',
					'background-border': 'green'
					};
				$scope.count = splitString.length;
			}	
		}
	};

}());