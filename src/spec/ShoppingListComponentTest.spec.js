describe('ShoppingList Component', function(){
  var $componentController;

  beforeEach(module('ShoppingListComponentApp'));
  beforeEach(inject(function(_$componentController_){
    $componentController = _$componentController_;

  }));

  it('Should detect no cookies in list', function(){
    var binding = [{items: {name: 'item 1', quantity:'1'}}];
    var ctrl = $componentController('shoppingList', {$element: null}, binding);
    var cookiesInList =  ctrl.cookiesInList();
    expect(cookiesInList).toEqual(false);
  });

  it('Should detect cookies in list', function(){
    var binding = [{items: {name: '2 cookies', quantity:'2'}}];
    var ctrl = $componentController('shoppingList', {$element: null}, binding);
    var cookiesInList =  ctrl.cookiesInList();
    expect(cookiesInList).toEqual(true);
  });
});