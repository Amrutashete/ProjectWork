(function () {

  'use strict';

  angular.module('BindingApp', [])
    .controller('BindingController', BindingController);

  BindingController.inject = ['$scope'];
  function BindingController($scope) {
    $scope.firstName = "Amruta";
   // $scope.fullName = "";

    $scope.showNumberOfWatchers = function () {
      console.log("# of watchers", $scope.$$watchersCount);
    };

    $scope.setFullName = function() {
      $scope.fullName = $scope.firstName +   " " + "shete";
    };

    $scope.logFirstName = function() {
      console.log("First name:" , $scope.firstName );
    }

    $scope.logFullName = function() {
      console.log("Full name:" , $scope.fullName );
    }
  };



})();