(function () {

  'use strict';

  angular.module('NGRApp', [])
    .controller('ngRController', ngRController);

  ngRController.inject = ['$scope'];
  function ngRController($scope) {
    $scope.onceCounter = 0;
    $scope.counter = 0;

    $scope.showNumberOfWatchers = function () {
      console.log("# of watchers", $scope.$$watchersCount);
    };

    $scope.countOnce = function() {
      $scope.onceCounter = 1;
    };

    $scope.upCounter =  function() {
      $scope.counter++;
    };

    $scope.$watch('onceCounter', function(newValue, oldValue){
      console.log("newValue: ", newValue);
      console.log("oldavlue: ", oldValue);
    });

    $scope.$watch('counter', function(newValue, oldValue){
      console.log("counter newValue: ", newValue);
      console.log("counter oldavlue: ", oldValue);
    });

  };



})();