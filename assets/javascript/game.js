
//variables
var j = 0;
var wins = 0;
var losses = 0;
var guessesSoFar = [];
var guessesLeft = 9;

//variables to hold references
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeftText = document.getElementById("guessesLeft");
var guessesSoFarText = document.getElementById("guessesSoFar");

//"physic" choices
var computerChoices = ("abcdefghijklmnopqrstuvwxyz").split("");
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

document.onkeyup = function (event) {

    if (j < 9) {

        // user letter choice
        var userChoice = event.key;
        // fill the array with the letters chose by the user
        guessesSoFar.push(userChoice);

        //if the user guess the letter 
        if (userChoice === computerGuess) {
            wins++;
        }

        //if wins === 1 , the game will start over again. counting the wins and losses

        //the user will have 9 guesses in total and everytime a letter is chose this # will decrease
        guessesLeft--;

        if (guessesLeft === 0) {
            losses++;
            //the game will start over again.
        }

        //variable j increase every time the user choose a letter
        j++;

        //text on the page:
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
        guessesSoFarText.textContent = "Your guesses So Far: " + guessesSoFar;
    }
};
