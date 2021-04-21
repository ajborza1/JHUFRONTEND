// Anthony Borza
// Assignment 9
// Due Date: 4/27/2021
// cetegories.component.js: This class  shows all avaiable categories to user

(function () {
'use strict';

// shows all avaiable categories to user
angular.module('Data')
.component('categories', {
	templateUrl: 'html/categories2.template.html',
	bindings:{
		items: '<'
	}
});

})();