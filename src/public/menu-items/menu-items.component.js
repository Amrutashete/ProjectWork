(function () {
  "use strict";
  
  angular.module('public')
  .component('menuItems', {
    templateUrl: 'src/public/menu-items/menu-items.html',
    bindings: {
      menuItem: '<'
    },
    controller: MenuItemsController
  });
  
  
  MenuItemsController.$inject = ['ApiPath'];
  function MenuItemsController(ApiPath) {
    var $ctrl = this;
    $ctrl.basePath = ApiPath;
  }
  
  })();