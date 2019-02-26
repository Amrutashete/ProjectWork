(function () {

  'use strict';

  angular.module('EAIApp', [])
    .controller('EAIController', EAIController); 

    EAIController.inject = ['$scope'];
    function EAIController($scope) {
      $scope.message = "hello";
      $scope.stateOfBeing = "hungry";

      $scope.sayMessage = function () {
        return 'The Dog is hungry!!!';
      };

      $scope.onFeedDog =  function () {
        $scope.stateOfBeing = "feed";
      }
      
    };

  

})();