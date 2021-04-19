
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