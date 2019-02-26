(function(){

  'use strict';

  angular.module('Spinner', []);

  angular.module('Spinner')
  .config(function(){
    console.log("spinner config fired!!");
  })
  .run(function(){
    console.log("spinner run fired!!");
  });
    
})();