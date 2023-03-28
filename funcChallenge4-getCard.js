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

function getCard() {
  let result = {
    value: null,
    suit: null,
  };
  const randomValue = () => {
    const values = [
      '1',
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

console.log('result from getCard function: ', getCard());
