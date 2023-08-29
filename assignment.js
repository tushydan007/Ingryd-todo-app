// solution to question 1
// function factorial(n) {
//   if (n === 0) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }

// console.log(factorial(5));

// // solution to question 2
// function fibonacci(number, array = [0, 1]) {
//   if (number <= 2) {
//     return array;
//   }
//   const [nextToLast, last] = array.slice(-2);
//   return fibonacci(number - 1, [...array, nextToLast + last]);
// }

// console.log(fibonacci(12));

// solution to question 3
// function sumOfArray(array) {
//   if (array.length < 1) {
//     return 0;
//   }
//   return array.pop() + sumOfArray(array);
// }

// console.log(sumOfArray([2, 3, 5, 7]));

// solution to question 4
// function powerOfANumber(base, exponent) {
//   if (exponent === 0) {
//     return 1;
//   }
//   return base * powerOfANumber(base, exponent - 1);
// }

// console.log(powerOfANumber(5, 3));

// // solution to question 5
// function flattenArray(arr) {
//   let flattenedArr = [];
//   for (const value of arr) {
//     if (Array.isArray(value)) {
//       flattenedArr = flattenedArr.concat(flattenArray(value));
//     } else flattenedArr.push(value);
//   }
//   return flattenedArr;
// }

// const data = [[1, 2, 3], [4, [5, 4]], [[7], [8, [9]]], 10];

// console.log(flattenArray(data));

// solution to question 6
// function sumOfDigits(num) {
//   if (num === 0) {
//     return 0;
//   }
//   return (num % 10) + Math.floor(sumOfDigits(num / 10));
// }

// console.log(sumOfDigits(5));
