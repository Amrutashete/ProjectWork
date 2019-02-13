(function () {

  'use strict';
    var shoppingList1 = [ "milk", "butter", "cookies", "bread", "spinach", "potato" ,"sessior", "pen", "notbook"];

    var shoppingList2 = [
      { 
        name:"milk",
        quantity: "2" 
      },
      { 
        name:"pen",
        quantity: "45" 
      },
      { 
        name:"cookies",
        quantity: "200" 
      },
      { 
        name:"bread",
        quantity: "3" 
      },
      { 
        name:"potato",
        quantity: "15" 
      }
    ]

  angular.module('ShoppingListApp', [])
    .controller('ShoppingListController', ShoppingListController);

    ShoppingListController.inject = ['$scope'];
  function ShoppingListController($scope) {
    $scope.shoppingList1 = shoppingList1;
    $scope.shoppingList2 = shoppingList2;

    $scope.onAddToList = function() {
      var newItem = {
        name: $scope.newItemName,
        quantity: $scope.newItemQuantity
      };
      $scope.shoppingList2.push(newItem);
    }
  };

 

})();