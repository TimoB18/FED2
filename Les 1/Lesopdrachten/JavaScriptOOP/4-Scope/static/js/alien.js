/**
 *	Create constructor object in global scope
 *
 */

function Alien(name) {
	this.name = name;
}
	Alien.prototype.speak = function () {
		console.log('Hi, my name is ' + this.name);
	}

	function makingVariables() {
		var iterator = 1;
		var max = 10;
		var min = 0;
	}

var rob = new Alien('Robert Rock');

rob.speak();


/**
 *	Create local scope with self invoking function
 *
 */
(function () {
	function Alien(name) {
		this.name = name;
	}
	
	Alien.prototype.speak = function () {
		console.log('Hi, my name is ' + this.name);
	}
	
	var roberta = new Alien("Roberta Rock");
	var breakpoint = 'let\'s stop the application here';
	
	roberta.speak();

	function makingVariables() {
		var iterator = 1;
		var max = 10;
		var min = 0;
	}

})();

