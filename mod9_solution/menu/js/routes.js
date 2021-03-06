// Anthony Borza
// Assignment 9
// Due Date: 4/27/2021
// routes.js: this class configures the routes and view
// states. 


(function () {
'use strict';

angular.module('Data')
.config(RoutesConfig);

// 3 view home, categories, and items

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider){

  // redirect to home if no other url matches
  $urlRouterProvider.otherwise('/');

  // set up UI states
  $stateProvider

    // view the home
    .state('home', {
      url: '/',
      templateUrl: 'html/home.template.html'
    })

    // view the categories
    .state('categories', {
      url: '/categories-list',
      templateUrl: 'html/categories.template.html',
      controller: 'CategoriesController as categories',
      resolve:{
          items: ['MenuDataService',  function(MenuDataService){
            return MenuDataService.getAllCategories();
          }]
      }
    })

    // view for items
    .state('itemDetail', {
      url: '/items/{itemId}',
      templateUrl: 'html/items.template.html',
      controller: 'ItemsController as itemDetail',
      resolve: {
      item: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
                return MenuDataService.getItemsForCategory($stateParams.itemId)
                .then(function (items) {
                  return items.menu_items;
                });
            }]
      }
  });
}

})();