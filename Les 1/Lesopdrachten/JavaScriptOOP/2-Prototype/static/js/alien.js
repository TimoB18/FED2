/**
 *	Object Constructor using 'prototype'
 *	
 *
 */

function Alien(name) {
	this.name = name;
}

Alien.prototype.speak = function () {
	console.log('Hi, my name is ' + this.name);
};

var rob = new Alien('Robert Rock');
var roberta = new Alien('Roberta Rock');

rob.speak();
roberta.speak();

function Person(name) {
	this.name = name;

	this.speak = function () {
		console.log('Hi, my name is ' + this.name);
	}
}

	Person.prototype.walk = function () {
		console.log('Hi, my name is' + this.name + ' and i walk')
	};

	Person.prototype.eat = function () {
		console.log('Hi, my name is' + this.name + ' and i eat')
	};

var bob = new Person('Bob');

bob.speak();
bob.walk();
bob.eat();
