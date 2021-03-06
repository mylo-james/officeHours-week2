/* 
Time: 20 mins
Write an arrow function called mostExotic that intakes an array
of animals and returns the animal that appears the least. If the 
array is empty return null.
*/

// Your code here

// Test cases
let zoo1 = ["lion", "tiger", "bear", "lion", "lion", "bear"];
console.log(mostExotic(zoo1)); // 'tiger'

let zoo2 = ["dog", "dog", "bird", "cat", "cat", "dog", "cat", "bird"];
console.log(mostExotic(zoo2)); // 'bird'

let zoo3 = [];
console.log(mostExotic(zoo3)); // null
