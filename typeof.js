// ---- typeof operator ------
// typeof is used for checking the type of a variable
const num = 5;
const greeting = 'hello NAME';
console.log('checking typeof num -- should be INT', typeof num);
console.log('checking typeof greeting -- should be STRING', typeof greeting);

// ---- THE POWER OF DOUBLE == and TRIPLE === ----------
// Double will check
// 1. VALUE
// ie. "5" == 5 will be true
console.log("double equal check for '5' == 5: ", '5' == 5);

// Triple will also check type
// ie. "5" === 5 will be false
// type is important so good to use ===
console.log(
  "tripe will make it false due to difference in type '5' === 5: ",
  '5' === 5
);

// ----- NOT EQUALS --------
// != is like double ==
// does not check type

// !== is like the triple ===
// good rule of thumb to use the !==
