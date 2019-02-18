
(function () {

  'use strict';

  var shoppingList = ["milk", "butter", "cookies", "bread", "spinach", "potato", "sessior", "pen", "notbook"];

  angular.module('ControllerAsApp', [])
    .controller('ParentController1', ParentController1)
    .controller('childController1', childController1);

  ParentController1.inject = ['$scope'];
  function ParentController1($scope) {
    $scope.parentValue = 1;
    $scope.pc = this;
    $scope.pc.ParentController1 = 1;
  };

  childController1.inject = ['$scope'];
  function childController1($scope) {
   console.log("$scope.parentValue: ", $scope.parentValue);
   console.log("CHILD $scope: ", $scope);

    $scope.parentValue =5;
    console.log("*** $scope.parentvalue = 5 ****");
    console.log("$scope.parentValue: ", $scope.parentValue);
    console.log("CHILD $scope: ", $scope);

    console.log("$scope.pc.parentValue:",  $scope.pc.ParentController1);
    $scope.pc.ParentController1 = 5;
    console.log("*** $scope.pc.parentValue = 5 ****");
    console.log("$scope.pc.parentValue:",  $scope.pc.ParentController1);
    console.log("$scope: ", $scope);
  };

})();