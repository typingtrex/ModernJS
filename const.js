// ---- CONST ------
// because arrays are a reference point, even with const, it's ok to change the eggs inside

const fridge = ['milk', 'eggs', 'chocolate'];
fridge[0] = 'juice';
console.log(fridge);

// const is used all the time with ARRAYS -- cause reference type would not change
