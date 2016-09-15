module.exports = startGame;

function startGame () {
	selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	letterinWord = selectedWord.split("");
	numBlanks = letterinWord.length;

	guessesLeft = 10;
	wrongLetters = [];
	blanksAndSuccesses = [];

	//populated blanks and success with right number of blanks

	for (var i = 0; i < numBlanks; i++) {
		blanksAndSuccesses.push("_")
	}

	console.log(blanksAndSuccesses.join(" "));
	console.log("guess left: ", guessesLeft);
	console.log("win count: ", winCount);
	console.log("loss count", lossCount);

	console.log(selectedWord);
	
	console.log(blanksAndSuccesses)
}

