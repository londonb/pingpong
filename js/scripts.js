var results = function(countTo) {

  var numberArray = [];
  var result = parseInt(countTo);

  for(var i1 = 1; i1 < (result + 1); i1 += 1) {
    numberArray.push("<li>")
    numberArray.push(i1);

  }

  for (var i2 = 0; i2 < numberArray.length; i2++) {
    if (numberArray[i2] % 3 === 0 && numberArray[i2] % 5 === 0) {
      numberArray[i2] ="PINGPONG!!!";
    } else if (numberArray[i2] % 3 === 0) {
      numberArray[i2] = "Ping";
    } else if  (numberArray[i2] % 5 === 0) {
      numberArray[i2] = "ponG";
    }
  }
  numberArray = numberArray.join("");
  return numberArray;
}

$(document).ready(function(){

  $("form#pingPongGames").submit(function(event) {
    var string = $("input#string").val();
    var toPrint = results(string);

    $("#printTo").append("<br><hr>",toPrint,"<br><hr><strong>Have Fun!</strong>");
    $("#hide").hide();

  event.preventDefault();
  });

});
