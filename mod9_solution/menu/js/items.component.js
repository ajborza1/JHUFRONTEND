

(function () {
'use strict';

// shows all menu items to user of a category

angular.module('Data')
.component('Items',{
	templateUrl: 'html/items.template.html',
	bindings:{
		items: '<'
	}
});

})();