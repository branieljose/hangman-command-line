 var Letter = function(letter) {
	this.letter = letter;
	this.line = true;
};

Letter.prototype.show = function() {
	if (this.line) {
		return '_';
	} else { return this.letter.toString() }
};

module.exports = Letter;
