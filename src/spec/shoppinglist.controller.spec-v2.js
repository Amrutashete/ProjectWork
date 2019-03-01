describe("Spec v2:ShoppingListController ", function(){


  beforeEach(function(){
    module(function($provide){
      $provide.service('ShoppingListServiceErrorMock', function(){
        var service = this;
        service.addItem = function(name, quantity){
          throw new Error("Test Message");
        };
        service.getItems = function(){
          return null;
        };
      });
    });
    module('ShoppingListApp');
  });

  var $controller;
  var ShoppingListController;

  beforeEach(inject(function (_$controller_, ShoppingListServiceErrorMock) {
    $controller = _$controller_;

    ShoppingListServiceErrorMock.addItem = function (name, quantity) {
      throw new Error("Test message");
    };
    ShoppingListServiceErrorMock.getItems = function () {
      return null;
    };

    ShoppingListController =
      $controller('ShoppingListController',
        { ShoppingListService: ShoppingListServiceErrorMock })
  }));

  it("Should change error message in controller", function(){
    ShoppingListController.addItem();
    expect(ShoppingListController.errorMessage).toBe("Test message");
  })
});