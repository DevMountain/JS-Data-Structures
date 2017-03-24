const firstArray = [ 10, 20, 30 ];
// Create a function named 'first' that is given 'firstArray' as the argument and  returns the first item in the given array.

// Code Here


// Next problem


const arr = [ 40, 50, 60 ];
// Create a function named 'last' that is given 'arr' as the argument and returns the last item in the given array.


// Code Here

// Next Problem


const family = [ 'Tyler', 'Jordyn', 'Ryan', 'Chelsey', 'Ireland' ];
// Create a function named 'looper' that is given family as it's only argument, loops through the given array, and console.logs every item in the array.

// Code Here


// Next problem


const letters = [ 'A', 'B', 'C', 'D', 'E' ];
// Write a function called reversedLooper that is given letters as it's only argument and loops through the given array backwards console.log-ing every item in the array starting at the end.

// Code Here


// Next Problem


const nums = [ 1, 2, 3, 6, 22, 98, 45, 23, 22, 12 ];
// Write a function named evenFinder that is given nums as it's only argument and removes all values that aren't even from the given array.

// Code Here


// Next problem


const numbersArray = [ 1, 2, 34, 54, 55, 34, 32, 11, 19, 17, 54, 66, 13 ];
// Write a function called divider that is given one argument, numbersArray.
// Have divider return an Array with the first item in the array being the evens array (all the even values from numbersArray)
// and the second item in the Array being the odds array (all the odd values from numbersArray).


// Code Here


// Next Problem

const usernames = [ 'j-robz', 'brackula', 'great-brettin' ];
// Write a function named contains that takes two arguments - usernames: an array of usernames, username: a single usernamename.
// contains should return true if 'username' is in the array and false if it is not.

// Code here


// Next problem

const uno = [ 1, 2, 3, 4, 5 ];
const dos = [ 2, 4, 6, 8, 10 ];
// Write a function named combine with two array parameters - 'first' and 'second'. 'combine' should return a new
// array containing all of the elements of both arrays. Use the spread operator to achieve this.

// Code here


// Next problem

const args = [ "Hey there", "Jimbo", true ];
function greeter( salutation, name, excited ) {
	const greeting = `${ salutation }, ${ name }`;

	if ( excited ) {
		return greeting + "!";
	} else {
		return greeting + ".";
	}
}
// Write a function named spreadInvoke with two parameters - args: an array, callback: a callback function. 'spreadInvoke'
// will invoke and return the result of 'callback' passing all of the elements in 'args' as individual arguments.

// Code here


// Next problem


const str = 'this is my sentence';
// Write a function called reverse that takes a given str as it's only argument and returns that string after it's been reversed

// Code Here


// Next Problem

/*
 Here we'll recreate the Array.map method. The .map method creates a new array by looping over an array, invoking
 a callback function on each element, and adding the result of the callback to a new array. After the loop is complete
 it returns the array.

 For example:
 function doubleNumber( number ) {
 	return number * 2;
 }
 [ 2, 5, 10 ].map( doubleNumber ); // [ 4, 10, 20 ]

 Create a function named map that takes two arguments - array: an array of values, callback: a callback function
 and recreates the functionality of .map
 */

// Code here


// Next problem

const arr1 = [ 1, 2, 3, 4 ];
const arr2 = [ 2, 4, 5, 6 ];
/*
 Write a function called 'both' with two parameters, arr1 and arr2
 'both' should return a new array with the matching numbers found in both arr1 and arr2.
 Example: var arr1 = [1,2,3,4]; var arr2 = [2,4,5,6]; newArray // [2,4]
*/

// Code Here


// NEXT PROBLEM


const devMountainEmployees = [];

const jeremy = {
	name: 'Jeremy',
	position: 'Director of Web',
	spiritAnimal: 'billy goat'
};

const cahlan = {
	name: 'Cahlan',
	position: 'CEO',
	spiritAnimal: 'butterfly'
};

const dallin = {
	name: 'Dallin',
	position: 'Lead Instructor',
	spiritAnimal: 'moose'
};

const colt = {
	name: 'Colt',
	position: 'Everything really',
	spiritAnimal: 'Young Male Horse'
};

/*
 Above you're given an empty array and four objects. Fill the devMountainEmployees
 array with those four objects. After that console.log the length of the Array and make
 sure that it's equal to 4.
*/

// Code Here


/*
 Now loop through the devMountainEmployees array and add a 'location' property to each object. For Jeremy, Cahlan, and
 Colt set the location to "Provo". For Dallin set the location to "Dallas".
*/

// Code Here

