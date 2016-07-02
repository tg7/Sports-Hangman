window.onload = function () {

//Global Variables

var wins = 0;
var losses = 0;
var guesses = 6;
var lettersGuessed = [];

var words = ["NICOLE", "TODD", "DEBORAH", "KEITH", "TAYLOR"];

//Shows Current Wins & Losses and appends to page

document.querySelector('#wins').innerHTML = "Wins: " + wins;
document.querySelector('#losses').innerHTML = "Losses: " + losses;
document.querySelector('.guessedLetters').innerHTML = "Letters Guessed: " + lettersGuessed;

// 

document.onkeyup = function(event) {
  
  var keypress = String.fromCharCode(event.keyCode).toLowerCase();

	lettersGuessed.push(keypress + "  ");
		console.log(lettersGuessed);

	document.querySelector('#guesses').innerHTML = "Guesses: " + guesses;
	guesses--;

	// console.log(userGuess);
	// Pushes typed letters on guessed letters div
	document.querySelector(".guessedLetters").innerHTML = "Letters Guessed: " + "<br>" + lettersGuessed;
	if (guesses <= -1) {

		alert('You Lost!');
		reset();
	} else {


	}

	// document.querySelector(".lettersGuessed").innerHTML = guessedLetters.join(" ");
	// document.getElementById('#guessed').appendChild(keypress);
	// kepress.push(guessedLetters);
	// console.log(guessedLetters[i]);
};

//Shows userGuess and appends it to the Letters Guessed Div


function reset() {

	window.location.href = "index.html";
	var guesses = 6;

}



}