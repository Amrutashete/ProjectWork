(function () {

  'use strict';

  angular.module('EAIApp', [])
    .controller('EAIController', EAIController)
    .filter('cat', CatFilter)
    .filter('truth', TruthFilter); 

    EAIController.inject = ['$scope', '$filter', 'catFilter'];
    function EAIController($scope, $filter, catFilter) {
      $scope.message = "hello";
      $scope.stateOfBeing = "hungry";
      $scope.pedigreeCost = .20;

      $scope.sayMessage = function () {
        var msg = 'The Dog is hungry!!!';
        var output = $filter('uppercase')(msg);
        return output;
      };

      $scope.sayCatMessage = function () {
        var msg = 'The Dog is hungry!!!';
        msg = catFilter(msg);
        var output = $filter('uppercase')(msg);
        return output;
      };

      $scope.onFeedDog =  function () {
        $scope.stateOfBeing = "feed";
      }
      
    };
    function CatFilter() {
      return function(input) {
        input = input || "";
        input = input.replace("Dog", "Cat");
        return input;
      };
    };

    function TruthFilter() {
      return function(input, target, replace) {
        input = input || "";
        input = input.replace(target, replace);
        return input;
      };

    }

  

})();