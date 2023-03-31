// in JS functions are objects

// --- var does not have block scope ---
// not good for naming and keeping consistency
// therefore, we use const and let

// ---- functions as VALUES ----------
function add(x, y) {
  return x + y;
}

const subtract = function (x, y) {
  return x - y;
};

function multiply(x, y) {
  return x * y;
}

const divide = function (x, y) {
  return x / y;
};

//We can store functions in an array!
const operations = [add, subtract, multiply, divide];

//Loop over all the functions in operations
for (let func of operations) {
  let result = func(30, 5); //execute func!
  console.log(result);
}

// We can also store functions in objects!
const thing = {
  doSomething: multiply,
};
thing.doSomething(4, 5); //20
// by writin a function to an object, we are creating a method

// ---- HIGHER ORDER FUNCTIONS ------
// functions that operate on or with other functions. They can:
// Accept other functions as arguments
// Return a function

// ---- example of a function with a function for an argument ----
function runThreeTimes(func) {
  func();
  func();
  func();
}

function cryAndComplain() {
  console.log('WOE IS ME! WHY!!!!');
}

runThreeTimes(cryAndComplain);

// ------ udemy's examples of function with a function argument ----------
/*

// This function accepts another function as an argument
function callThreeTimes(f) {
  //And calls it 3 times:
  f();
  f();
  f();
}

function cry() {
  console.log("BOO HOO I'M SO SAD!");
}

function rage() {
  console.log("I HATE EVERYTHING!");
}

function repeatNTimes(action, num) {
  // call action (a function) num number of times
  for (let i = 0; i < num; i++) {
    action();
  }
}

repeatNTimes(rage, 13);

// Accepts 2 functions as arguments
// Randomly selects 1 to execute
function pickOne(f1, f2) {
  let rand = Math.random();
  if (rand < 0.5) {
    f1();
  } else {
    f2();
  }
}


*/
