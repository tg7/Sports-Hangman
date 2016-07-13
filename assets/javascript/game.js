window.onload = function () {

//Global Variables
var wins = 0;
var losses = 0;
var lettersGuessed;
var boxes;
var words = ["METS", "PHILLIES", "DODGERS", "YANKEES"];
var answer;
var guesses = 8;
var start = null;

//ID Element Variables
var switchBoxes = document.getElementById('word');
var switchLetters = document.getElementById('letters');
var switchWins = document.getElementById('wins');
var switchLosses = document.getElementById('losses');
var switchGuesses = document.getElementById('guesses');

// Start Of Functions

function makeBoxes() {
    guesses = 8;
	for (var i = 0; i < answer.length; i++) {
		boxes.push(' ___ ');
    console.log(boxes);
		switchBoxes.innerHTML = "The Word Is: " + boxes.join('');
    switchLetters.innerHTML = "Letters Guessed: ";
    switchWins.innerHTML = "Wins: " + wins;
    switchLosses.innerHTML = "Losses: " + losses;
    switchGuesses.innerHTML = "Guesses: " + guesses;
	}
}

function startGame() {
  lettersGuessed = [];
  boxes = [];
  answer = words[Math.floor(Math.random() * words.length)];
  console.log('The Word Is: ' + answer);
  makeBoxes();
}

// Calls makeBoxes Function
startGame();

//Keypress Function
document.onkeyup = function(event) {
  
  // Subtracts guess on each letter pressed
  guesses--;
  // Assigns new value to guesses div id on page
  switchGuesses.innerHTML = "Guesses: " + guesses;

  var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
	
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
		  	switchBoxes.innerHTML = "The Word Is: " + boxes.join('');
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