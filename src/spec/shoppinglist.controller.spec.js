describe("ShoppingListController", function () {
  beforeEach(module('ShoppingListApp'));

  var $controller;
  var ShoppingListController;

  beforeEach(inject(function (_$controller_) {
    $controller = _$controller_;

    var ShoppingListServiceErrorMock = {}
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
})