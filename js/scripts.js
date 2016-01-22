var results = function(countTo) {

  var numberArray = [];
  var result = parseInt(countTo);

  console.log(countTo)
  for(var index = 1; index < (result + 1); index += 1) {
    numberArray.push(index);
  }  console.log(numberArray)
  return numberArray;

}
