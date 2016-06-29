window.onload = function () {

//Global Variables

var userGuess = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var wins = 0;
var losses = 0;
var guesses = 6;

var words = ["NICOLE", "TODD", "DEBORAH", "KEITH", "TAYLOR"];

//Shows Current Wins & Losses

document.querySelector('#wins').innerHTML = "Wins: " + wins;
document.querySelector('#losses').innerHTML = "Losses: " + losses;



document.onkeyup = function(event) {
  
  var keypress = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(keypress);  
	guesses--;
};


document.querySelector('#guessed').innerHTML = keypress;

//Shows userGuess and appends it to the Letters Guessed Div


function reset() {

	var guesses = 6;

}

reset();


}