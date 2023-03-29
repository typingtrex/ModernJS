// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

// ------- first attempt -------------------------------
/*
function getCard() {
  let result = {
    value: null,
    suit: null,
  };
  const randomValue = () => {
    const values = [
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'J',
      'Q',
      'K',
      'A',
    ];
    result.value = values[Math.floor(Math.random() * values.length)];
  };
  const randomSuit = () => {
    const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
    result.suit = suits[Math.floor(Math.random() * suits.length)];
  };
  randomValue();
  randomSuit();
  return result;
}
*/

// -------- 2nd attempt with cleaner code -------------------------
function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getCard() {
  const values = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A',
  ];
  const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
  return {
    value: pick(values),
    suit: pick(suits),
  };
}

console.log('result from getCard function: ', getCard());

// ----- udemy solution -----------------------------
/*

// function getCard() {
// 	const values = [
// 		'1',
// 		'2',
// 		'3',
// 		'4',
// 		'5',
// 		'6',
// 		'7',
// 		'8',
// 		'9',
// 		'10',
// 		'J',
// 		'Q',
// 		'K',
// 		'A'
// 	];
// 	const valIdx = Math.floor(Math.random() * values.length);
// 	const value = values[valIdx];

// 	const suits = [ 'clubs', 'spades', 'hearts', 'diamonds' ];
// 	const suitIdx = Math.floor(Math.random() * suits.length);
// 	const suit = suits[suitIdx];
// 	return { value: value, suit: suit };
// }

function pick(arr) {
	//return random element from arr
	const idx = Math.floor(Math.random() * arr.length);
	return arr[idx];
}

function getCard() {
	const values = [
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'10',
		'J',
		'Q',
		'K',
		'A'
	];
	const suits = [ 'clubs', 'spades', 'hearts', 'diamonds' ];
	return { value: pick(values), suit: pick(suits) };
}
*/
