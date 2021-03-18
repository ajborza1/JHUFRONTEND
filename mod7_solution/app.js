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
	toBuyItem.itemQuantity = 0;
	toBuyItem.price = 0;
	
	// show items for purchases
	toBuyItem.buyItems = ShoppingListService.getBuyItems();

  	toBuyItem.addBuyItem = function () {
    	ShoppingListService.addBuyItem(toBuyItem.itemName, toBuyItem.itemQuantity, toBuyItem.price);
  	}

  	toBuyItem.buyItem = function(itemIndex){
		ShoppingListService.buyItem(itemIndex);
  	}

}

AlreadyBoughtController.$inject = ['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService){

	var showBought = this;

	// show bought items
	showBought.boughtItems = ShoppingListService.getBoughtItems();
	
	showBought.totalPrice = function (quantity, price){
  		ShoppingListService.totalPrice(quantity, price);
  	}


}

// handles all business logic for shopping list
function ShoppingListService(){

	var service = this;

	// array to hold list of shopping items
	var boughtItems = [];

	// add 5 items to the by section
	var buyItems =
	[
		{
			name: "Cookies",
		 	quantity: 10,
		 	price: 2.00
		}, 
		{
			name: "Coke", 
			quantity: 3,
			price: 2.99
		},
		{
			name: "Chips",
			quantity: 4,
			price: 3.99
		},
		{
			name: "Candy",
			quantity: 5,
			price: 1.59
		},
		{
			name: "Apples", 
			quantity: 6,
			price: 5.99
		}
	];

	// calculate total price of all items
	service.totalPrice = function (quantity,price) {  
		var total = 0;
		for(var i in boughtItems){
			total += quantity[i] * price[i];
		};
		return total;
   }

	// adds item and pushes it to boughtItem
	service.addBuyItem = function(item, quantity, price){
	  var boughtItem =
	   {
	      name: item,
	      quantity: quantity,
	      price: price
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


