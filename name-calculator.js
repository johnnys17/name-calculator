// simple name length calculator - practicing javascript basics
/* this program calculates facts about a person's name using strings, 
numbers,    and the Math object */

const personName = 'Johnny';
const nameLength = personName.length;

const isShortName = nameLength < 5;
const noName = null;
const undefinedName = undefined;

// calculate the facts about the name length

const doubleLength = nameLength * 2;
const halfLength = nameLength / 2;
const remainder = nameLength % 3;

const roundedHalf = Math.round(halfLength);

// display name facts
console.log("Name: " + personName.toUpperCase());
console.log("Length: " + nameLength);
console.log("Is it a short name? " + isShortName);
console.log("Double the length: " + doubleLength);
console.log("Rounded half length: " + roundedHalf);

/* check for invalid names */
console.log("No name provided: " + noName);
console.log("Undefined name: " + undefinedName);
