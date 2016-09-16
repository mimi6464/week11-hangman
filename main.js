var Word = require("./word.js");
var words = new Word(['Bob Marley', 'Michael Jackson', 'Modonna', 'Beyonce', 'Elivis', 'Aretha Franklin', 'Prince']);
var Letters = require("./letter");
var startGame = require("./game.js");



//Global Vars
global.wordOptions = words.t;
global.selectedWord = Letters.selectedWord;
global.letterinWord = Letters.letterinWord;
global.numBlanks = Letters.numBlanks;
global.blanksAndSuccesses = Letters.blankandsuccess;
global.wrongLetters = Letters.wrongLetters;

global.winCount = 0;
global.lossCount = 0;
global.guessCount = 15;




startGame();

Letters.roundComplete = function () {
	console.log("win", winCount, "loss", lossCount, "guess", guessesLeft);
	
	if (wrongLetters.length > 1) { console.log("incorrect letters used: ", wrongLetters.join(",")); }

	// check if user won
	if (letterinWord.toString() == blanksAndSuccesses.toString()) {
		winCount++;
		console.log("win");
		console.log("win count: ", winCount);
		// startGame();
		process.done();
	}
		// check if user lost
	else if (guessesLeft == 0) {
		lossCount++;
		console.log("loser");
		console.log("lose count: ", lossCount);
		// startGame();
		process.done();
	}
}


// process.stdin.setRawMode(true);
// process.stdin.resume();

