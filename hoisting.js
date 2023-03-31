// ---- HOISTING -------------

console.log(animal);
// var hoists the variable, but does not hoist the declaration. So the first console.log will run var animal, which is undefined
var animal = 'fuzzy bear';
// now it is defined so it will run 'fuzzy bear'
console.log(animal);

// console.log(shrimp); // error
// let does not hoist the variable so we will run into a REFERENCE ERROR, because it was not initialized.
let shrimp = 'Harlequin Shrimp';
console.log(shrimp);

// ----- function declaration also gets hoisted ------
// since it's hoisted, this will still work
howl();
function howl() {
  console.log('ahhhhWOOOOOOOOO');
}

// var can only hoist the variable declaration
console.log(tweet); // returns undefined

// let and const do not hoist the declaration or the function.
// tweet(); // error -- 'Cannot acces 'tweet' before initialization
var tweet = () => {
  console.log('tweet tweeet');
};
