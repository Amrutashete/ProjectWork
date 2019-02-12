
(function (){

  'use strict';

  angular.module('myFirstApp', [])
  .controller('myFirstController', function($scope) {
    $scope.name = "Amruta";
    $scope.sayHello = function() {
      return 'Hello Coursera!!';
    }
  });

})();