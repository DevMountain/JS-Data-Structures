const keysObj = {
	  foo: "bar"
	, baz: "qux"
};
// Create a function named 'keys' with a parameter of 'obj'. 'keys' will loop through the object and console.log
// each key.

// Code here


// Next problem

const valuesObj = {
	  foo: "baz"
	, bar: "qux"
};
// Create a function named 'values' with a parameter of 'obj'. 'values' will loop through the object and console.log
// each value.

// Code here


// Next problem

const name = "Phillip J. Fry";
const deltaBrainwave = null;
/*
	Create a variable named 'fry' and set it equal to an object with three properties:
		- name: set equal to the 'name' variable
		- deltaBrainwave: set equal to the deltaBrainwave variable
		- bestFriend: set equal to "bender"
	The 'name' and 'deltaBrainwave' properties should be set using object property shorthand.
*/

// Code here



// Next problem

const phone = {
	  make: "Pixel"
	, model: "xl"
	, year: 2016
};
// Destructure make, model and year into their own variables

// Code here


// Next problem

const person = {
	  name: "Zachary"
	, age: 42
	, ssn: "123-45-6789"
	, pets: [ "fluffy", "mr nibbles" ]
};
const cardHolder = {
	  name: "Zachary"
	, age: 42
	, cardNumber: "0987-6543-2109-8765"
	, memberSince: "Oct 12 2001"
};
// Write a function named merge which takes two parameters - person and cardholder. 'merge' will return a new object
// containing all of the properties of both objects. This should not alter either of the parameters. The objects
// passed to merge may not always match the above structure.

// Code here


// Next problem

/*
	Create a class named Character which takes three arguments
		- name
		- level
		- health
	Place the arguments on the instance ('this') in the constructor.

	The Character class should also have two methods:
		- takeDamage
			- Takes an 'amount' parameter
			- Subtracts 'amount' from the character's health.
		- dealDamage
			- Takes no parameters
			- Returns Math.random() * this.level
*/

// Code here



/*
	Create a 'minion' variable from the character class, giving it a name of "minion", a level of 1, and
	health of 10.
*/

// Code here


/*
	Invoke the minion's 'takeDamage' method passing in 2. console.log the minion's health to make sure it updated.
*/

// Code here


/*
	Create a class named Player which extends 'Character'. 'Player' accepts the same arguments as 'Character' as well as
	a new one - mana. Invoke the 'super' method and place mana on 'this'.

	The 'Player' class will have one method 'castSpell' this method will:
		- Check if the player has at least 10 mana
		- If they do
			- Decrement mana by 10
			- Return the number 10
		- If they don't
			- Invoke the 'takeDamage' method, passing in 10
			- Return 0
*/

// Code here


/*
	Create a 'leeroy' variable from the 'Player' class, giving it a name of "Leeroy Jenkins", a level of 5, health of
	100, and mana of 20.
*/

// Code here


/*
	Invoke leeroy's 'castSpell' method 3 times and console.log the leeroy object to confirm 'castSpell' works as expected
*/

// Code here


// Create a variable named leeroysDamage and set it equal to the result of invoking leeroy's dealDamage method

// Code here

