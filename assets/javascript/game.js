window.onload = function () {

//Global Variables
var wins;
var losses;
var lettersGuessed = [];
var boxes = [];
var words = ["mets", "phillies", "dodgers", "yankees"];
var answer = words[Math.floor(Math.random() * words.length)];
var guesses = 8;

console.log('The Word Is: ' + answer);

function makeBoxes() {

	for (var i = 0; i < answer.length; i++) {
		boxes.push('_');
		document.getElementById('word').innerHTML = "The Word Is: " + boxes;
	}
 
}

// Calls makeBoxes Function
makeBoxes();

//Keypress Function
document.onkeyup = function(event) {
  
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  // Subtracts guess on each letter pressed
  guesses--;
	
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
		  	boxes[i] = answer[i];
		  	// joinedAnswer = boxes.join('_');
		  	document.getElementById('word').innerHTML = "The Word Is: " + boxes;
		  	// console.log('You guessed right!');

		  } 
		  var completeWord = boxes.join('')
		
		  if (completeWord === answer) {
		  	wins++;
		  	alert('You Guessed The Word: ' + answer);

		  } 

		  if (guesses <= 0) {
		  	losses++;
		  	alert('You Lost! The Correct Word Was ' + answer);

		  }

  }

};

}