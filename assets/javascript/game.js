//variables
var wins = 0;
var losses = 0;
var guessesSoFar = [];
var guessesLeft = 9;

//"physic" choices
var computerChoices = ("abcdefghijklmnopqrstuvwxyz").split("");
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//variables to hold references
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeftText = document.getElementById("guessesLeft");
var guessesSoFarText = document.getElementById("guessesSoFar");

document.onkeyup = function (event) {

    // user letter choice
    var userChoice = event.key;
    // fill the array with the letters chose by the user
    guessesSoFar.push(userChoice);

    //if the user guess the letter 
    if (userChoice === computerGuess) {
        wins++;
        //after the first win the game will start over again
        guessesLeft = 9;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        j = 0;
        guessesSoFar = [];
    } else {
        guessesLeft--;
    }

    if (guessesLeft === 0) {
        losses++;
        guessesLeft = 9;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        j = 0;
        guessesSoFar = [];
    }

    //text on the page:
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
    guessesSoFarText.textContent = "Your guesses So Far: " + guessesSoFar;
};
