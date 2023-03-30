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
