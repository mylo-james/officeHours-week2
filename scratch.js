// //Label variables as either Primitive vs. Reference.
// /*
// Reference: Object, Array
// Primitive: everything else (Numbers, Strings, bool)
// */
// //Identify when to use dot notation (.) vs. bracket notation ([]) when
// //accessing values of an object.

// let obj1 = {
//   name: "Mylo",
//   age: 1000,
// };

// let randomKey = "age";
// console.log(obj1["name"]);
// console.log(obj1[randomKey]);
// console.log(obj1.name);

// // Use the obj[key] !== undefined pattern to check if a given variable that
// // contains a key exists in an object.

// if (obj1["dog"] !== undefined) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// // Utilize Object.keys and Object.values in a function.

// console.log(Object.keys(obj1)); // ['name', 'age'];
// console.log(Object.values(obj1)); // ['Mylo', 1000];

// //Iterate through an object using a for...in loop.

// let obj2 = {
//   name: "Emily",
//   age: 20,
// };

// for (let key in obj2) {
//   console.log(key);
//   console.log(obj2[key]);
// }

// // Define a function that utilizes ...rest syntax to accept an arbitrary
// // number of arguments.

// function sum(...nums) {
//   console.log(nums);
//   let count = 0;
//   nums.forEach((num) => (count += num));
//   return count;
// }

// console.log(sum(1, 2)); //3
// console.log(sum(4, 5, 5)); // 14

// // Use ...spread syntax for Object literals and Array literals.
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5];
// let arr3 = [...arr1, ...arr2];
// let arr4 = arr1.concat(arr2);
// console.log(arr3);
// console.log(arr4);

// let biff = {
//   type: "dog",
//   breed: "boxer",
//   town: "Osage",
//   age: 10,
// };

// let buster = { ...biff, age: 0 };

// console.log(biff, buster);

// // Destructure an array to reference specific elements.
// // Destructure an object to reference specific values.

// let nums = [1, 2, 3];
// let [num1, num2, num3] = nums;
// console.log(num1, num2, num3);

// [num1, num2] = [num2, num1];
// console.log(num1, num2, num3, nums);

// let obj3 = {
//   name: "Caleb",
//   age: 221,
// };

// let { age, name } = obj3;
// console.log(name, age);

// // Write a function that accepts an array as an argument and returns an object
// // representing the count of each character in the array.

// /*
// Write a function called countEvens that returns an object that contains the count
// of evens and odds...

// let nums = [1, 2, 3, 3, 2, 2, 2];
// countsEvens(nums) => {evens: 4, odds: 3}
// */
// function countEvens(arr) {
//   let count = {};
//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     if (num % 2 === 0) {
//       if ("evens" in count) {
//         count.evens++;
//       } else {
//         count.evens = 1;
//       }
//     } else {
//       if ("odds" in count) {
//         count.odds++;
//       } else {
//         count.odds = 1;
//       }
//     }
//   }
//   return count;
// }

// let nums2 = [1, 2, 3, 3, 2, 2, 2];
// console.log(countEvens(nums2)); // {evens: 4, odds: 3}

//Callbacks!

// Given multiple plausible reasons, identify why functions are called
// “First Class Objects” in JavaScript.
/* 
  1. Can be returned from a function (closure)
  2. Can be used an as argument for a function (callbacks)
  3. Can be stored in a variable, obj, or arr (function expression/arrs/objs)
*/

// Given a code snippet containing an anonymous callback, a named callback,
// and multiple console.logs, predict what will be printed.
// TAKE THUR QUIZ

function times2(num) {
  return num * 2;
}

function plus2(num) {
  return num + 2;
}

function HOF(cb1, cb2, num) {
  let res1 = cb1(num);
  let res2 = cb2(num);
  if (res1 > res2) {
    return res1;
  } else {
    return res2;
  }
}

console.log(HOF(times2, plus2, 1)); // 3
console.log(HOF(times2, plus2, 3)); // 6

// Write a function, myMap, that takes in an array and a callback as arguments.
// The function should mimic the behavior of Array.map.
// Write a function, myFilter, that takes in an array and a callback as
// arguments. The function should mimic the behavior of Array.filter.
// Write a function, myEvery, that takes in an array and a callback as
// arguments. The function should mimic the behavior of Array.every.

// WATCH DEM VIDEOS

//SCOPE!

// Identify the difference between const, let, and var declarations.
// Explain the difference between const, let, and var declarations.

/* 
let: can't be redeclared in the same block (block scoped), can be reassigned, 
hoisted to the Temporal Dead Zone, so it will error
const: block scoped, cannot be reassigned (but can be mutated), hoisted to 
the Temporal Dead Zone, so it will error
var: old, function/local scoped, can be reassigned AND redeclared, hoisted to the
top of the function and init-ed with undefined.
*/

// Predict the evaluation of code that utilizes function scope, block scope,
// lexical scope, and scope chaining.

// TAKE FRIDAY SCOPE QUIZ
/* 
Write an arrow function called sum that intakes an array... sends back the sum
*/
// function sum(arr) {
//   return arr.reduce(function (sum, num) {
//     return sum + num;
//   });
// }

// const sum = (arr) => arr.reduce((accum, val) => accum + val);

// console.log(sum([1, 2, 3])); //6
