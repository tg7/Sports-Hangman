window.onload = function () {

//Global Variables

var wins;
var losses;
var guesses = 6;
var lettersGuessed = [];
var popUpWord = document.querySelector(".word").innerHTML

var words = ["NICOLE", "TODD", "DEBORAH", "KEITH", "TAYLOR"];

// For Loop To Go Through Words
for (var i =0; i < words.length; i++) {
 // console.log(words[i]);

}

//Shows Current Wins & Losses and appends to page

wins = 0;
losses = 0;

document.querySelector('#wins').innerHTML = "Wins: " + wins;
document.querySelector('#losses').innerHTML = "Losses: " + losses;
document.querySelector('.guessedLetters').innerHTML = "Letters Guessed: " + lettersGuessed;

// 

document.onkeyup = function(event) {
  
  var keypress = String.fromCharCode(event.keyCode).toLowerCase();

  makeBoxes();
	lettersGuessed.push(keypress + "  ");
		console.log(lettersGuessed);

	document.querySelector('#guesses').innerHTML = "Guesses: " + guesses;
	guesses--;

	// Pushes typed letters on guessed letters div
	document.querySelector(".guessedLetters").innerHTML = "Letters Guessed: " + "<br>" + lettersGuessed;

	if (guesses <= -1) {
		losses++;
		document.querySelector('#losses').innerHTML = "Losses: " + losses;
		alert('You Lost!');
		reset();
		
		
	} else if (keypress === word) {
		wins++;
		document.querySelector('#wins').innerHTML = "Wins: " + wins;
		alert('You Win!');
		reset();

	}

	// document.querySelector(".lettersGuessed").innerHTML = guessedLetters.join(" ");
	// document.getElementById('#guessed').appendChild(keypress);
	// kepress.push(guessedLetters);
	// console.log(guessedLetters[i]);
};

//Shows userGuess and appends it to the Letters Guessed Div

newWord();

function newWord() {

	var word = Math.floor(Math.random() * words.length);
	
	guesses = 6;

	var boxes = [];
	console.log(words[word]);

	for (var i = 0; i < word.length; i++) {
		if ( keypress ===word[i]) {
			boxes[i] = word[i];
			console.log(boxes[i]);
			console.log(word[i]);
		}

	}

}

function makeBoxes () {
popUpWord = "Word" + "<br>" + "<br> The Word Is: " + words[word];
for (var i = 0; i < word.length; i++) {
		if ( keypress === word[i]) {
			boxes[i] = word[i];
	
		}

	}

}

function reset() {

	var guesses = 6;
	guesses = document.querySelector('#guesses').innerHTML;
	newWord();

}

console.log(popUpWord);
}
