/**
 *	Object literal
 *	
 *
 */

var alien = {
	name: 'Robert Rock',
	
	speak: function () {
		console.log('Hi, my name is ' + this.name);

		// console.log("This is:" + this.constructor);
	}
}

alien.speak();

var person = {
	name: 'Bob',
	
	speak: function () {
		console.log('Hi, my name is ' + this.name);
	},

	walk: function () {
		console.log('Hi, my name is ' + this.name + ' and i walk' )
	},

	eat: function () {
		console.log('Hi, my name is ' + this.name + ' and i walk')
	}
}

person.speak();
person.walk();
person.eat();