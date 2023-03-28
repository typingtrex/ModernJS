// Write a function to find the average value in an array of numbers
//avg([75,76,80,95,100]) //85.2

const avg = (arr) => {
  let sum = 0;
  for (const num in arr) {
    // sum += num;
    console.log('num is: ', num);
  }
};

console.log('average is: ', avg([0, 50])); //25
