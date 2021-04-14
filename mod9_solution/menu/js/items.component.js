(function () {
'use strict';

// shows all menu items to user of a category

angular.module('MenuApp')
.component('Items',
	templateUrl: 'html/items.template.html'
	bindings:{
		items: '<'
	}

});


})();