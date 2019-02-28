(function () {
  'use strict';

  angular.module('ShoppingList')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider

      // Home page
      .state('home', {
        url: '/',
        templateUrl: 'src/shoppingListPremade/template/home.template.html'
      })

      // Premade list page
      .state('mainList', {
        url: '/main-list',
        templateUrl: 'src/shoppingListPremade/template/main-shoppinglist.template.html',
        controller: 'MainShoppingListController as mainList',
        resolve: {
          items: ['ShoppingListService', function (ShoppingListService) {
            return ShoppingListService.getItems();
          }]
        }
      })
      .state('mainList.itemDetail', {
        // url: '/item-detail/{itemId}',
        templateUrl: 'src/shoppingListPremade/template/item-detail.template.html',
        controller: 'ItemDetailController as itemdetail',
        params: {
          itemId: null
        }
      });
      // .state('itemDetail', {
      //   url: '/item-detail/{itemId}',
      //   templateUrl: 'src/shoppingListPremade/template/item-detail.template.html',
      //   controller: 'ItemDetailController as itemdetail',
      //   resolve: {
      //     item: ['$stateParams', 'ShoppingListService',
      //       function ($stateParams, ShoppingListService) {
      //         return ShoppingListService.getItems()
      //         .then(function(items) {
      //           return items[$stateParams.itemId];
      //         })
      //       }]
      //   }
      // });
  }

})();