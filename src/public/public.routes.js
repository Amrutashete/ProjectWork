(function() {
  'use strict';
  
  angular.module('public')
  .config(routeConfig);
  
  /**
   * Configures the routes and views
   */
  routeConfig.$inject = ['$stateProvider'];
  function routeConfig ($stateProvider) {
    // Routes
    $stateProvider
      .state('public', {
        abstract: true,
        templateUrl: '/src/public/public.html'
      })
      .state('public.home', {
        url: '/',
        templateUrl: '/src/public/home/home.html'
      })
      .state('public.menu', {
        url: '/menu',
        templateUrl: "/src/public/menu/menu.html",
        controller: 'MenuController',
        controllerAs: 'menuCtrl',
        resolve: {
          menuCategories: ['MenuService', function(MenuService){
            return MenuService.getCategories();
          }]
        }
      })
      .state('public.menuitems',{
        url: '/menu/{category}',
        templateUrl : '/src/public/menu-item/menu-item.html',
        controller: 'MenuItemsController',
        controllerAs: 'MenuItemsCtrl',
        resolve: {
          menuItems: ['$stateParams', 'MenuService', function($stateParams,MenuService){
            return MenuService.getMenuItem($stateParams.category);

          }]
        }
      });
  }
  })();