

//  var numberArray= [1,2,3,4,5,6,7,8,9];
//  console.log("number array:" , numberArray);

//   function above5Filter(value) {
//     return value > 5;
//   };
//   var filteredNumberArray = numberArray.filter(above5Filter);
//   console.log("Filtered Array:" , filteredNumberArray);

//   var shoppingList = [ "milk", "butter", "cookies", "bread", "spinach", "potato" ,"sessior", "pen", "notbook"];
//   console.log("shoppin List: ", shoppingList);

//   var searchValue = "potato";

//   function containsFilter(value) {
//     return value.indexOf(searchValue)  !== -1;
//   }

// var searchedShoppingList = shoppingList.filter(containsFilter);
// console.log("Searched Shopping List", searchedShoppingList);






(function () {

  'use strict';
   
  var shoppingList = [ "milk", "butter", "cookies", "bread", "spinach", "potato" ,"sessior", "pen", "notbook"];

  angular.module('FilterArrayApp', [])
    .controller('FilterArrayController', FilterArrayController);

    FilterArrayController.inject = ['$scope'];
  function FilterArrayController($scope) {
    $scope.shoppingList = shoppingList;
  };

})();