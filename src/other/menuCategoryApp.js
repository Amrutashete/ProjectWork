
(function () {

  'use strict';


  angular.module('MenuCategoryApp', [])
    .controller('MenuCategoryController', MenuCategoryController)
    .service('MenuCategoryService', MenuCategoryService)
    .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");


  MenuCategoryController.$inject = ['MenuCategoryService'];
  function MenuCategoryController(MenuCategoryService) {
    var menu = this;

    var promise = MenuCategoryService.getMenuCategories();

    promise.then(function (response) {
      menu.categories = response.data;
    })
      .catch(function (error) {
        console.error("Error");
      });

    menu.logMenuItems = function(shortName) {
      var promise = MenuCategoryService.getMenuForCategories(shortName);
      promise.then(function(response){
        console.log(response.data);
      })
    }

  };

  MenuCategoryService.$inject = ['$http', 'ApiBasePath'];
  function MenuCategoryService($http, ApiBasePath) {
    var service = this;

    service.getMenuCategories = function () {
      var response = $http({
        method: "GET",
        url: (ApiBasePath + '/categories.json')
      });

      return response;
    }
    service.getMenuForCategories = function (shortName) {
      var response = $http({
        method: "GET",
        url: ( ApiBasePath + '/menu_items.json'),
        params: {
          category: shortName
        }
      });

      return response;
    }

  };

})();