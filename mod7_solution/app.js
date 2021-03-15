// Anthony Borza
// Assignment 7
// Due Date: 3/23/2021
// app.js: 

(function (){

'use strict';

// declare angular module 
angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListService', ShoppingListService);

// declare two contollers using the singleton 
// approach to share data

ToBuyController.$inject = ['ShoppingListService'];
function ToBuyController(ShoppingListService){
	
	// reference toBuyItem
	var toBuyItem = this;

	toBuyItem.itemName = "";
	toBuyItem.itemQuantity = "";
	
	// show items for purchases
	toBuyItem.buyItems = ShoppingListService.getBuyItems();

  	toBuyItem.addBuyItem = function (item, quantity) {
    	ShoppingListService.addBuyItem(toBuyItem.item, toBuyItem.quantity);
  	}

  	toBuyItem.buyItem = function(itemIndex){
		ShoppingListService.buyItem(itemIndex);
  	}

  	toBuyItem.errorMessage = function(){
  		if(toBuyItem.buyItems.length > 0){
  			return false;
  		}
  		else{
  			return true;
  		}
  	}

}

AlreadyBoughtController.$inject = ['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService){

	var showBought = this;

	showBought.itemName = "";
	showBought.itemQuantity = "";

	// show bought items
	showBought.boughtItems = ShoppingListService.getBoughtItems();

	showBought.errorMessage = function(){
		if(showBought.boughtItems.length > 0){
  			return false;
  		}
  		else{
  			true;
  		}
	}
}


function ShoppingListService(){

	var service = this;

	// array to hold list of shopping items
	var boughtItems = [];

	// add 5 items to the by section
	var buyItems =
	[
		{
			name: "cookies",
		 	quantity: "10"
		}, 
		{
			name: "Coke", 
			quantity: "3"
		},
		{
			name: "Chips",
			quantity: "4"
		},
		{
			name: "Candy",
			quantity: "2"
		},
		{
			name: "Apples", 
			quantity: "6"
		}
	];


	service.addBuyItem = function(item, quantity){
	  var boughtItem =
	   {
	      name: item,
	      quantity: quantity
	   };
	    buyItems.push(boughtItem);
	}

	// moves elements from one buyItems array to boughtItems array
	service.buyItem = function (itemIndex){
		var item = buyItems[itemIndex];
		boughtItems.push(item)
		buyItems.splice(itemIndex, 1);
	};


	// show items that are ready to buy
	service.getBuyItems = function(){
		return buyItems;
	};

	// show items that have been bought
	service.getBoughtItems = function(){
		return boughtItems;
	};
}

}());


