var letter = require('./Letter');

var Word = function (word) {
    if (word == null)
        throw new Error('Missing word!');

  this.word = word;
  this.correct = 0;
  this.letters = [];
};


Word.prototype.getLettersFromWord = function () {


    for (var i = 0; i <= this.word.length-1; i++) {
        this.letters.push(new letter(this.word[i]));
    }
};


Word.prototype.guessLetter = function (letter) {
    

    var returned = false; // Doing the return like this incase of multiple letters.

    for (var i = 0; i < this.letters.length; i++) {
        if (this.letters[i].letter == letter) {
            this.letters[i].isLine = false;

            this.correct++;
            returned = true;
        }
    }

    return returned;
};

//Display blank line or letter.
Word.prototype.show = function (){
    if (this.word == null)
        throw new Error('Missing word!');

    var word = "";

    for (var i = 0; i <= this.letters.length-1; i++) {
        if (word.length == 0)
            word += this.letters[i].show();
        else
            word += " " + this.letters[i].show();
    }

    console.log(word);
};


module.exports = Word;