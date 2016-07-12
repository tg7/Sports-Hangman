window.onload = function () {

//Global Variables
var wins;
var losses;
var lettersGuessed = [];
var words = ["mets", "phillies", "dodgers"];
var answer = Math.floor(Math.random() * words.length +1);
console.log(answer);
// console.log(words);

//Keypress Function
document.onkeyup = function(event) {
  
  var keypress = String.fromCharCode(event.keyCode).toLowerCase();
  console.log(keypress);

  //Pushes pressed key to the letters guessed array
  
  for (var i = 0; i < answer.length; i++) {
  	// words[i] = answer[i];
  	console.log(words[i]);
  }

  for (var i = 0; i < answer.length; i++) {
  	console.log(answer[i]);

  }

};

}