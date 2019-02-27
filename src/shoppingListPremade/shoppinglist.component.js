(function () {
  'use strict';
  
  angular.module('ShoppingList')
  .component('shoppingList', {
    templateUrl: 'src/shoppingListPremade/template/shoppinglist.template.html',
    bindings: {
      items: '<'
    }
  });
  
  })();