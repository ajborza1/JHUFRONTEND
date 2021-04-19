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
         resolve:{
            item: ['MenuDataService', '$stateParams', 
              function(MenuDataService, $stateParams){
                return MenuDataService.getItemsForCategory($stateParams.itemId)
                .then(function(items){
                  return items.menu_items;
            });
          }]
      }
    });
}

})();