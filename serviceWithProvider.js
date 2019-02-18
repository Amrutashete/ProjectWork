// with ng-if, ng-show and ng-hide
(function () {

  'use strict';


  angular.module('CustomServiceApp', [])
    .controller('ShoppingListController', ShoppingListController) 
    .provider('ShoppingListService', ShoppingListServiceProvider)
    .config(config);


    config.$inject = ['ShoppingListServiceProvider'];
    function config(ShoppingListServiceProvider) {
      ShoppingListServiceProvider.defaults.maxItems = 2;
    }

  ShoppingListController.$inject = ['ShoppingListService'];
  function ShoppingListController(ShoppingListService) {
    var list = this;
    // var shoppingList = ShoppingListService();

    list.items = ShoppingListService.getItems();
    list.itemName = "";
    list.itemQuantity = "";

    list.addItem = function () {
      try {
        ShoppingListService.addItem(list.itemName, list.itemQuantity);
      }
      catch (error) {
        list.errorMessage = error.message;
      }
    }
    list.removeItem = function(itemIndex) {
      ShoppingListService.removeItem(itemIndex);
    }
  };


  function ShoppingListService(maxItems ) {
    var service = this;
    var items = [];

    service.addItem = function (ItemName, quantity) {
      if ((maxItems === undefined) || 
      (maxItems !== undefined) && (items.length < maxItems)) {
        var item = {
          name: ItemName,
          quantity: quantity
        }
        items.push(item);
      }
      else {
         throw new Error("Max Item  " + maxItems + " reached. ");
      }
      
    };

    service.removeItem = function (itemIndex) {
      items.splice(itemIndex, 1);
    }
    service.getItems = function () {
      return items;
    }
  }
  function ShoppingListServiceProvider () {
    var provider = this;

    provider.defaults  = {
      maxItems: 3
    }

    provider.$get = function() {
      var shoppingList = new ShoppingListService(provider.defaults.maxItems);
      return shoppingList;
    };

  }


})();