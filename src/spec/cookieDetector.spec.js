describe("CookieDetector", function(){
  var itemsWithoutCookies;
  var itemWithCookies;

  beforeEach(function(){
    itemsWithoutCookies = ['apple', 'banana', 'orange'];
    itemWithCookies = ['cakes', 'pancakes', 'bread', 'cookies'];
  });

  it('Should be able to detect no cookies', function(){
    var result = detectCookie(itemsWithoutCookies);
    expect(result).not.toBe(true);
  });

  it('Should be able to detect cookies', function(){
    var result = detectCookie(itemWithCookies);
    expect(result).toBe(true);
  });
});