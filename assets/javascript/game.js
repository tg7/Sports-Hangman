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
	
	// Pushes userGuess to lettersGuessed Array
  lettersGuessed.push(userGuess);

  // Creating new variable to join userGuesses together
  var userGuesses = lettersGuessed.join(' ');

  // Appends userGuesses to guessed div
  document.getElementById('guessed').innerHTML = "Letters Guessed: " + userGuesses;
  
  console.log(lettersGuessed);
  console.log(userGuess);

  //Pushes pressed key to the letters guessed array
  
  for (var i = 0; i < answer.length; i++) {
  		
		  if (userGuess === answer[i]) {
		  	console.log('You guessed right!');

		  }

  }

};

}