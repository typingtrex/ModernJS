// Writing out JS String Content

// ---- tempplate literals ---
let item = 'cucumbers';
let price = 46.0;
let quantity = 5;
let age = 29;

console.log(`I would like you to purchase a ${item} that are $${price + 10.5}`);

console.log(`I want ${quantity} ${item}`);
console.log(`I am ${age} years old.`);
console.log(`You bought ${quantity} ${item}. And it cost ${quantity * price}.`);

// ---- parseInt ----
// parseInt turns string into a number
// parseFloat turns string with decimal into a number

console.log('with parseInt the type should be string: ', typeof parseInt('40'));
console.log(
  'with parseFloat the type should be string: ',
  typeof parseInt('45.5')
);

// ----- comparison operators ----
console.log('comparisons A before a', 'A' < 'a');
console.log('comparisons a before A', 'a' < 'A');
