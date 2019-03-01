describe("OddEven", function () {
  var randomNumberGenerator3;
  var randomNumberGenerator8;

  beforeEach(function () {
    randomNumberGenerator3 = function (from, to) {
      return 3;
    };

    randomNumberGenerator8 = function (from, to) {
      return 8;
    };
  });

  it('Should be produce odd number', function () {
    var result = getRandomOddOrEven1to10("odd", randomNumberGenerator3)
    expect(result).toEqual(3);
  });

  it('Should be produce even number', function () {
    var result = getRandomOddOrEven1to10("even", randomNumberGenerator8)
    expect(result).toEqual(8);
  });

});