// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.  Make sure you igore string casing!

const isPangram = (str) => {
  str = str.toLowerCase();
  const alphabets = {
    a: true,
    b: true,
    c: true,
    d: true,
    e: true,
    f: true,
    g: true,
    h: true,
    i: true,
    j: true,
    k: true,
    l: true,
    m: true,
    n: true,
    o: true,
    p: true,
    q: true,
    r: true,
    s: true,
    t: true,
    u: true,
    v: true,
    w: true,
    x: true,
    y: true,
    z: true,
  };

  for (let i in str) {
    let currLetter = str[i];
    if (alphabets[currLetter]) {
      alphabets[currLetter] = false;
    }
  }

  const values = Object.values(alphabets);
  for (let value of values) {
    // console.log('value should be true or false: ', value);
    if (value) {
      return false;
    }
  }
  return true;
  // console.log(str);
};

console.log(
  'should be true: ',
  isPangram('The five boxing wizards jump quickly')
); //true
console.log(
  'should be false: ',
  isPangram('The five boxing wizards jump quick')
); //false

// ----- solution on udemy --------------------------------
/*
// Version using indexOf
function isPangram(sentence) {
	let lowerCased = sentence.toLowerCase();
	for (let char of 'abcdefghijklmnopqrstuvwxyz') {
		if (lowerCased.indexOf(char) === -1) {
			return false;
		}
	}
	return true;
}

// Version using string.includes()
// Nice and clean, but not supported in IE
function isPangram(sentence) {
	let lowerCased = sentence.toLowerCase();
	for (let char of 'abcdefghijklmnopqrstuvwxyz') {
		if (!lowerCased.includes(char)) {
			return false;
		}
	}
	return true;
}

*/
