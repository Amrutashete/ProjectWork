(function () {
  'use strict';
  
  angular.module('Spinner')
  .component('loadingSpinner', {
    templateUrl: 'src/spinner/loadingspinner.template.html',
    controller: SpinnerController
  });
  
  
  SpinnerController.$inject = ['$rootScope']
  function SpinnerController($rootScope) {
    var $ctrl = this;
    var cancellers  = [];

    $ctrl.$onInit = function(){
      var cancel = $rootScope.$on('$stateChangeStart', 
      function(event, toState, toParams, fromState, fromParams, option){
        $ctrl.showSpinner = true;
      });
      cancellers.push(cancel);


      var cancel = $rootScope.$on('$stateChangeSuccess', 
      function(event, toState, toParams, fromState, fromParams){
        $ctrl.showSpinner = false;
      });
      cancellers.push(cancel);

      var cancel = $rootScope.$on('$stateChangeError', 
      function(event, toState, toParams, fromState, fromParams, error){
        $ctrl.showSpinner = false;
      });
      cancellers.push(cancel);
    };
  
    // var cancelListener = $rootScope.$on('shoppinglist:processing', function (event, data) {
    //   console.log("Event: ", event);
    //   console.log("Data: ", data);
  
    //   if (data.on) {
    //     $ctrl.showSpinner = true;
    //   }
    //   else {
    //     $ctrl.showSpinner = false;
    //   }
    // });
  
    $ctrl.$onDestroy = function () {
      // cancelListener();
      cancellers.forEach(function(item){
        item();
      })
    };
  
  };
  
  })();