// Anthony Borza
// Assignment 9
// Due Date: 4/27/2021
// cetegories.component.js: This class shows all menu items to user of a category

(function () {
'use strict';

angular.module('Data')
.component('items',{
	templateUrl: 'html/items.template.html',
	bindings:{
		items: '<'
	}
});

})();