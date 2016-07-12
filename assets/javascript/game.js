window.onload = function () {

//Global Variables


//Keypress Function
document.onkeyup = function(event) {
  
  var keypress = String.fromCharCode(event.keyCode).toLowerCase();
  console.log(keypress);
};

}