//create an array that list out all the options for the computer
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//create a variable that hold wins, losses, starting at 0 and guesses left starting at 9
var wins = 0;
var losses = 0;
var guessLeft = 9;
var playerChoice = [];

//create variable that hold reference to DOM element
var winsDisplay = document.getElementById("wins");
var lossesDisplay = document.getElementById("losses");
var guessesLeftDisplay = document.getElementById("guessesleft");
var playerGuessDisplay = document.getElementById("playerGuesses");

//when user press key then folling function runs
document.onkeyup = function(event){

    var userGuess = event.key;
    //event.keycode displays key's specific code
    console.log("userGuess" + userGuess + event.keyCode);

    //computer guess random value code
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);

}