var prompt = require('prompt');
var word = require('./word.js');
var letter = process.argv[2];
var wordList = [
    'car',
    'boat',
    'bike',
    'airplane',
    'train',
    'motorcycle',
    'truck'
]

var Game = function() {
	this.toGuess =  new word(wordList[Math.floor(Math.random() * wordList.length)]);
	this.toguess = getLettersFromWord();
	this.gueeses = 9;
	this.guessed = 0;
    this.prompt();

}

 console.log(Game.toGuess);
//  prompt.start();
//   // 
//   // Get two properties from the user: username and email 
//   // 
//   prompt.get(['username', 'email'], function (err, result) {
//     // 
//     // Log the results. 
//     // 
//     console.log('Command-line input received:');
//     console.log('  username: ' + result.username);
//     console.log('  email: ' + result.email);
//   });
// // word(letter);
// // console.log(Word.prototype.show);