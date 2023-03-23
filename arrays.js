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
console.log(fruits.reverse());

// ---- ARRAY SLICE ----------
// returns a COPY of the array
// if an index is specified it's FROM that index up to but NOT INCLUDING the second index
const redFruit = fruits.slice(0, 1);
console.log(redFruit);
let yellow = fruits.slice(1);
console.log(yellow);
// OR counting from the back
yellow = fruits.slice(-1);
console.log(yellow);
console.log(fruits);

// ---- ARRAY SPLICE ----------
// To insert or to delete
const animals = ['shark', 'salmon', 'bear', 'cow', 'eagle'];

// start at index 2, delete nothing, add in 'spider' at index 2
animals.splice(2, 0, 'spider');
console.log(animals);

// ---- ARRAY SORT ----------
//sorting

// ---- ARRAY Stored as Reference ---
let nums = [4, 5, 6, 7, 8];
let otherNums = nums;
// both are pointing to the same reference point
otherNums.pop();
otherNums.pop();
otherNums.pop();
console.log(nums, otherNums);
// both are affected

// ---- NESTED ARRAYS -------
const board = [
  ['O', null, 'X'],
  ['X', 'O', 'X'],
  ['O', null, 'O'],
];
