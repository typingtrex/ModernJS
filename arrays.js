// ---- CREATING ARRAYS ----------
// array literals
const arrayLiterals = [];

// ---- ARRAY INDICES ----------
// js arrays are indexed at 0
// js array's lengths are array.length
console.log(arrayLiterals.length);

// ---- MODIFYING ARRAYS ----------
const colors = ['blue', 'yellow', 'magenta', 'orange'];
colors[0] = 'greenBLUE';
console.log(colors);

colors[5] = 'hello'; // cannot add this way
console.log(colors);

// ---- ARRAY METHODS ----------
// MDN has a LOT
// PUSH METHOD -- adds to end of array
// POP METHOD -- removes at the end of the array
// SHIFT METHOD -- removes from the front of the array
// UNSHIFT METHOD -- adds to the front of the array
// unshifting all together is a different order from unshifting 1 at a time

// ---- ARRAY CONCAT -- MERGES ARRAYS ----------
let fruits = ['apple', 'banana'];
let veggies = ['asparagus', 'brussels sprouts'];

console.log(fruits.concat(veggies));
console.log(veggies.concat(fruits));

// ---- ARRAY INCLUDES RETURNS TRUE----------
// array.includes("fish")
// returns true if that exact string is included

// ---- ARRAY INDEXOF ----------
// Searches for a value, and if it does exist RETURNS index
// if it doesn't exist, it'll return -1
console.log(
  'this would be to check after index 2, and will return -1',
  fruits.indexOf('banana', 2)
);

console.log(
  'this would be to check after index 0, and will return 1',
  fruits.indexOf('banana', 0)
);

// ---- ARRAY JOIN ----------
// joins the array with whatever is inside join()
console.log(fruits.join(' -> '));

// ---- ARRAY REVERSE ----------
console.log(fruits.reverse());
//reverses order inside the array - actually changes the given array
console.log(fruits);

// ---- ARRAY SLICE ----------
// ---- ARRAY SPLICE ----------
// ---- ARRAY SORT ----------
