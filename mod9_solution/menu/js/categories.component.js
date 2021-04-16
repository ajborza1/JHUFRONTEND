
(function () {
'use strict';

// shows all avaiable categories to user
angular.module('Data')
.component('Categories', {
	templateUrl: 'html/categories.template.html',
	bindings:{
		items: '<'
	}

});

})();