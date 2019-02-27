
(function () {

  'use strict';

  angular.module('CustomServiceApp', [])
    .controller('ShoppingListController1', ShoppingListController1)
    .controller('ShoppingListController2', ShoppingListController2)
    // .controller('ShoppingListShowController', ShoppingListShowController)
    .factory('ShoppingListFactory', ShoppingListFactory);
    //.service('ShoppingListService', ShoppingListService); 
    //we dont need to call this service by angular we will call byour end

  ShoppingListController1.inject = ['ShoppingListFactory'];
  function ShoppingListController1(ShoppingListFactory) {
    var list1 = this;
    var shoppingList = ShoppingListFactory();

    list1.items = shoppingList.getItems();
    list1.itemName = "";
    list1.itemQuantity = "";

    list1.addItem = function () {
      shoppingList.addItem(list1.itemName, list1.itemQuantity);
    }
    list1.removeItem = function(itemIndex) {
      shoppingList.removeItem(itemIndex);
    }
  };

  ShoppingListController2.inject = ['ShoppingListFactory'];
  function ShoppingListController2(ShoppingListFactory) {
    var list2 = this;
    var shoppingList = ShoppingListFactory(3);

    list2.items = shoppingList.getItems();
    list2.itemName = "";
    list2.itemQuantity = "";

    list2.addItem = function () {
      try {
        shoppingList.addItem(list2.itemName, list2.itemQuantity);
      }
      catch(error) {
        list2.errorMessage = error.message;
      }
    }
    list2.removeItem = function(itemIndex) {
      shoppingList.removeItem(itemIndex);
    }
  };

  ShoppingListShowController.inject = ['ShoppingListFactory'];
  function ShoppingListShowController(ShoppingListFactory) {
    var showList = this;

    showList.items =  ShoppingListService.getItems();

    showList.removeItem = function(itemIndex) {
      ShoppingListService.removeItem(itemIndex);
    }

  };

  function ShoppingListService( maxItem ) {
    var service = this;
    var items = [];

    service.addItem = function (ItemName, quantity) {
      if ((maxItem === undefined) || 
      (maxItem !== undefined) && (items.length < maxItem)) {
        var item = {
          name: ItemName,
          quantity: quantity
        }
        items.push(item);
      }
      else {
        throw new Error("Max Item ( "+ maxItem + ") reached. ");
      }
      
    };

    service.removeItem = function (itemIndex) {
      items.splice(itemIndex, 1);
    }
    service.getItems = function () {
      return items;
    }
  }

  function ShoppingListFactory() {
    var factory = function(maxItems) {
      return ShoppingListService(maxItems);
    };
    return factory;
  }


})();