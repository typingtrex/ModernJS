// -------- CALLBACK FUNCTIONS ------------------
// when we pass a function to another function, the function that was passed is called a callback

// example:
// function callTwice(func) {
//  func();
//  func()
//}

// ---------GREETINGS is the Callback function-------------
// callTwice(greetings) {
//  greetings();
//  greetings();
//}

// more examples:
function grumpus() {
  alert('GAHHH GO AWAY!');
}

// setTimeout(callback, delay)
setTimeout(function () {
  //we pass an anonymous callback function
  alert('WELCOME!');
}, 5000);

//DON'T WORRY ABOUT ANY OF THIS SYNTAX!!
const btn = document.querySelector('button');
// JUST FOCUS ON THE CALLBACK WE PASS IN!
btn.addEventListener('click', function () {
  alert('WHY DID YOU CLICK ME!!??');
});
