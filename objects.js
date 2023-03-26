// OBJECTS ARE COLLECTIONS OF PROPERTIES

// CREATING OBJECT LITERALS
const user = {
  name: 'Ji',
  age: 30,
  favoriteFood: 'spicy',
};

const fitBitData = {
  totalSteps: 304556,
  totalMiles: 6.74,
  avgCalorieBurn: 499,
  '45 steps goal': true,
};

// console.log(fitBitData[45 steps goal]) does not work
console.log(fitBitData['45 steps goal']);
