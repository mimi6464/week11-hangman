module.exports = Letters;

exports.selectedWord = "";
exports.letterinWord = [];
exports.numBlanks = 0;
exports.blanksAndSuccesses = [];
exports.wrongLetters = [];

exports.winCount = 0;
exports.lossCount = 0;
exports.guessCount = 15;

function Letters(letter) {

	var isLetterInWord = false;
	for (var i = 0; i < numBlanks; i++) {
		if (selectedWord[i] == letter) {
			isLetterInWord = true;
		}
	}

	//  populate out blankandsuccess 
	if (isLetterInWord) {
		for (var i = 0; i < numBlanks; i++) {
			if (selectedWord[i] == letter) {
				blanksAndSuccesses[i] = letter;
			}
		}
	}
	else {
		wrongLetters.push(letter);
		guessesLeft--;
	}
	console.log(blanksAndSuccesses);

}

