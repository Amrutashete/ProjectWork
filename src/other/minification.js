// Mimified code

!function(){"use strict";function o(n,e,l){n.name="Amruta",n.upper=function()
{var o=e("uppercase");n.name=o(n.name)},console.log(l.annotate(o))}function n(o,n)
{return"blah!"}angular.module("DIApp",[]).controller("DIController",["$scope","$filter","$injector",o]),
console.log("blah!"),console.log(o()),console.log(n),console.log(n.toString)}();





(function () {

  'use strict';

  // angular.module('DIApp', [])
  //   .controller('DIController', ['$scope','$scope','$injector',DIController]); 
  angular.module('DIApp', [])
    .controller('DIController', DIController); 

    DIController.inject = ['$scope','$filter','$injector'];
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