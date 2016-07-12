window.onload = function () {

//Global Variables
var wins;
var losses;
var lettersGuessed = [];
var words = ["mets", "phillies", "dodgers", "yankees"];
var answer = words[Math.floor(Math.random() * words.length)];

console.log('The Word Is: ' + answer);

//Keypress Function
document.onkeyup = function(event) {
  
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  lettersGuessed.push(userGuess);

  console.log(lettersGuessed);
  console.log(userGuess);

  //Pushes pressed key to the letters guessed array
  
  for (var i = 0; i < answer.length; i++) {
  		
		  if (userGuess === answer[i]) {
		  	alert('You guessed right!');

		  }

  }

  // for (var i = 0; i < lettersGuessed.length; i++) {
  	

  // }

};

}