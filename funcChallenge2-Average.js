// Write a function to find the average value in an array of numbers

const avg = (arr) => {
  let sum = 0;
  for (const num of arr) {
    sum += num;
    // console.log('num is: ', num);
  }
  // console.log('sum is: ', sum);
  return sum / arr.length;
};

console.log('average is: ', avg([0, 50])); //25
console.log('output should be 85.2: ', avg([75, 76, 80, 95, 100])); //85.2
