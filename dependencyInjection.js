
(function () {

  'use strict';

  angular.module('DIApp', [])
    .controller('DIController', DIController); 

    function DIController($scope, $filter, $injector) {
      $scope.name = "Amruta";

      $scope.upper = function() {
        var upCase  = $filter('uppercase');
        $scope.name = upCase($scope.name);
      
      };
      console.log($injector.annotate(DIController)); 
      // To see how program knows which service is injected ,
      // It actually parse that function and checkes where that service is being used
    };

    function AnnotateMe(name, blah) {
      return 'blah!';
    };
    console.log(AnnotateMe());
    console.log(DIController());
    console.log(AnnotateMe);
    console.log(AnnotateMe.toString);
   

})();