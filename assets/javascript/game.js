//create an array that list out all the options for the computer
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//create a variable that hold wins, losses, starting at 0 and guesses left starting at 9
var wins = 0;
var losses = 0;
var guessesLeftStill = 9;
var playersChoice = [];

//create variable that hold reference to DOM element
var winsDisplay = document.getElementById("wins");
var lossesDisplay = document.getElementById("losses");
var guessesLeftDisplay = document.getElementById("guessesLeft");
var playerInputDisplay = document.getElementById("playerInput");

//win, loss, user guess displayy
winsDisplay.textContent = "wins: " + wins;
lossesDisplay.textContent = "losses: " + losses;
guessesLeftDisplay.textContent = "Guesses Left: " + guessesLeftStill;
playerInputDisplay.textContent = "Your guesses so far: " + playersChoice;

//when user press key then folling function runs
document.onkeyup = function(event){

    var userGuess = event.key;
    //event.keycode displays key's specific code
    console.log("userGuess" + userGuess + event.keyCode);

    //computer guess random value code
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);

    if (userGuess != null){
        playersChoice.push(userGuess);
    }

    //
    guessesLeftDisplay.textContent = "Guesses Left" + guessesLeftStill;
    console.log(guessesLeftStill);

    //if user put uppercase value then convert into lowercase win or loss logic
    if((userGuess.toLowerCase() === computerGuess) ) {
        wins ++;
        playersChoice = [];
        guessesLeftStill = 9;
    }else if(guessesLeftStill === 0){
        losses ++;
        playersChoice = [];
        guessesLeftStill = 9;
    }else{
        guessesLeftStill -= 1;
    }

    //win, loss, user guess displayy
    winsDisplay.textContent = "wins: " + wins;
    lossesDisplay.textContent = "Losses: " + losses;
    guessesLeftDisplay.textContent = "Guesses Left: " + guessesLeftStill;
    playerInputDisplay.textContent = "Your guesses so far: " + playersChoice;

};