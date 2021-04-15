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

    // need a resolve
    .state('categories', {
      url: '/categories',
      templateUrl: 'html/categories.template.html',
      controller: 'CategoriesController as categories',
      resolve:{
          items: ['MenuDataService', function(MenuDataService)]{
            return MenuDataService.getAllCategories();
          }]
      }
    });

    // need a resolve
    .state('items', {
      url: '/items/{itemId}',
      templateUrl: 'html/items.template.html',
      controller: 'ItemsController as items',
         resolve:{
          item: ['MenuDataService', function(MenuDataService)]{
            return MenuDataService.getItemsForCategory()
            .then(function(items){
              return items[$stateParams.itemId];
            });
          }]
      }
    });
}

})();