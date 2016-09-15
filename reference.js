// 3.	With the files from Step 2, you'll put together a console-based hangman app that incorporates objects, user-input and constructors in its solution.
// o	Both letter.js and word.js should be constructor files:
// o	word.js should contain all of the methods which will check the letters guessed versus the random word selected.
// o	letter.js should control whether or not a letter appears as a "_" or as itself on-screen.
// o	Your game.js file will randomly select a word for the player.
// o	main.js will contain the logic of your app. Running it in Terminal/Bash will start the game.
// o	The app should end when a player guesses the correct word or runs out of guesses.
// Tips
// 1.	Program the game one piece at a time! Break the program down into fragments rather than chipping away little by little at giant, abstract problem.
// 1.	Focus on one part of the smaller problem and get some code working.
// 2.	Rinse and repeat (and remember, console.log is your friend).

// word(letter) to guesses
// wrong guesses
// guesses left
// games won:
// games lost

//***METHOD WHICH PRINTS ALL OF THE STATS FOR A CHARACTER//
    //this.printStats = function() {
    //     console.log("Name: " + this.name + "\nProfession: " + this.profession + "\nGender: " + this.gender + "\nAge: " + this.age + "\nStrength: " + this.strength + "\nHitPoints: " + this.hitpoints);
    //     console.log("\n-------------\n");
    // };
//**METHOD WHICH DETERMINES WHETHER OR NOT A CHARACTER'S "hitpoints" ARE LESS THEN ZERO AND RETURNS TRUE OR FALSE DEPENDING UPON THE OUTCOME//
    // 
//**METHOD WHICH TAKES IN A SECOND OBJECT AND DECREASES THEIR "hitpoints" BY THIS CHARACTER'S STRENGTH//
//     this.attack = function(character2) {
//         character2.hitpoints -= this.strength;
//     };
// array of words
// pick a random with random function to pick the word
// set the word = that word
// ck the length of that word
// fill in array with _ex 10 letters '_ ' of correct number of letters
// each time clicked what letter they picked, if correct count repeated letter/counter/ keep track 
// if a letter is repeated return  

// objects
// user-input
// constructors-hangman
// __________________________________
// letter.js constructor, control whether or not a letter appears as a '_' or as itself on-screen

// _______________________________________
// word.js constructor,
// contains methods which will ck the letters guessed vs the random word selected

// _________________________________________
// game.js randomly select a word for the player

// ________________________________________
// main.js will contain the logic of your app.
// running it in Terminal/Bash will start the game
// ________________________________________
// export file
// var inquirer = require('inquirer');
// inquirer.prompt([/* Pass your questions in here */]).then(function (answers) {
//     // Use user feedback for... whatever!! 
// });

// //construtor function for creating player object
// var wordOptions = ['', '','','','','',''];
// var selectedWord = '';
// var lettersInWord = [];
// var numBlanks = 0; 
// var blankAndSuccesses = [];
// var wrongLetters =[];   
// }
// //Game counters
// var winCount = 0;
// var lossCount = 0;
// var guessesLeft = 7;

// //Functions 
// function startGame(){
//     selectedWord = wordOptions[Math.floor(Math.random()* wordOptions.length)];
//     lettersinWord = selectedWord.split('');
//     numBlanks = lettersInWord.length;
// }
// /pupulate blanks and successes with the right number of blanks
// for(var i =0; i< numBlanks; i++){
//     blankAndSuccesses.push('_');
// }

// //Letter wasn't found
// else{ wrongLetters.push(letter);
//     guessesLeft--;
// }

// //ck if user won
// if(lettersInWord.toString() == blankAndSuccesses.toString()){
//     winCount++;
//     alert('you won!');
// }
// startGame();
// //ck if user lost
// else if(guessesLeft == 0){
//     lossCount++;
//     alert('you lost!');