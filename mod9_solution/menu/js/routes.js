(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig)

// 3 view home, categories, and items

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider){

  // redirect to home if no other url matches
  urlRouterProvider.otherwise('/');

  // set up UI states
  $stateProvider

    .state('home', {
      url: '/',
      templateUrl: 'html/home.template.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'html/categories.template.html'
      controller: ''
    })

    .state('items', {
      url: '/items',
      templateUrl: 'html/items.template.html'
      controller: ''
    });
}

})();