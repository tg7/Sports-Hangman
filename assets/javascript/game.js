window.onload = function () {

//Global Variables
var wins;
var losses;
var lettersGuessed;
var boxes;
var words = ["METS", "PHILLIES", "DODGERS", "YANKEES"];
var answer;
var guesses;
var start = null;

//ID Element Variables
var switchBoxes = document.getElementById('word');
var switchLetters = document.getElementById('letters');
var switchWins = document.getElementById('wins');
var switchLosses = document.getElementById('losses');
var switchGuesses = document.getElementById('guesses');


function makeBoxes() {
	for (var i = 0; i < answer.length; i++) {
		boxes.push('_');
		switchBoxes.innerHTML = "The Word Is: " + boxes;
    switchLetters.innerHTML = "Letters Guessed: ";
    wins = switchWins.innerHTML;
    losses = switchLosses.innerHTML;
	}
 
}

function startGame() {
  lettersGuessed = [];
  boxes = [];
  answer = words[Math.floor(Math.random() * words.length)];
  console.log('The Word Is: ' + answer);
  makeBoxes();
  guesses = 8;

}

// Calls makeBoxes Function
startGame();

//Keypress Function
document.onkeyup = function(event) {
  
  var userGuess = String.fromCharCode(event.keyCode).toUpperCase();

  // Subtracts guess on each letter pressed
  guesses--;
	
	// Pushes userGuess to lettersGuessed Array
  lettersGuessed.push(userGuess);

  // Creating new variable to join userGuesses together
  var userGuesses = lettersGuessed.join(' ');

  // Appends userGuesses to guessed div
  switchLetters.innerHTML = "Letters Guessed: " + userGuesses;
  
  console.log(lettersGuessed);
  console.log(userGuess);

  //Pushes pressed key to the letters guessed array
  
  for (var i = 0; i < answer.length; i++) {
  		
		  if (userGuess === answer[i]) {
		  	boxes[i] = answer[i];
		  	// joinedAnswer = boxes.join('_');
		  	switchBoxes.innerHTML = "The Word Is: " + boxes;
		  	// console.log('You guessed right!');

		  } 
		  
		  var completeWord = boxes.join('')
		
		  if (completeWord === answer) {
		  	wins++;
		  	alert('You Guessed The Word: ' + answer);
		  	startGame();

		  } 

		  if (guesses <= 0) {
		  	losses++;
		  	alert('You Lost! The Correct Word Was ' + answer);
		  	startGame();

		  }

  }

};

}