function getRandomNumber(from, to) {
    return Math.random() * (max - min) + min;
}

function getRandomOddOrEven1to10(type, randomNumberGenerator) {
  var found = false;
  while(!found) {
    var num = randomNumberGenerator(1,10);
    if( type === 'odd'){
      if(num % 2 !== 0) { 
        return num
      };
    }
    else{
      if(num % 2 === 0) { 
        return num
      };
    }
  }
}