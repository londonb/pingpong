var results = function(countTo) {

  var numberArray = [];
  var result = parseInt(countTo);

  for(var i1 = 1; i1 < (result + 1); i1 += 1) {
    numberArray.push(i1);
  }


  for (var i2 = 0; i2 < numberArray.length; i2++) {
    if (numberArray[i2] % 3 === 0 && numberArray[i2] % 5 === 0) {
      numberArray[i2] ="pingpong";
    } else if (numberArray[i2] % 3 === 0) {
      numberArray[i2] = "ping";
    } else if  (numberArray[i2] % 5 === 0) {
      numberArray[i2] = "pong";
    }
  }
  numberArray = numberArray.toString();
  console.log(numberArray)
  return numberArray;
}
