/* 
Time: 20 mins
Write an arrow function called mostExotic that intakes an array
of animals and returns the animal that appears the least. If the 
array is empty return null.
*/
/* 
PLAN
Define an function that intakes an ARR
1. Get an accurate count of the animals.
define a counter obj //{}
iterate over the arr
  if my animal is NOT in the obj I need to add it to the obj/ set it to 1
  otherwise I need to increase the number of times I've seen that animal
2. Find the animal with the smallest count.
define the exotic = the first key in the counter obj
iterate over the rest the keys
  if the currentKey is < exoticKey
    currentKey becomes the new exoticKey
return the animal that is most exotic
*/

let mostExotic = (arr) => {
  if (arr.length === 0) {
    return null;
  }
  // let counter = {};
  // arr.forEach((animalName) => {
  //   if (!(animalName in counter)) {
  //     counter[animalName] = 1;
  //   } else {
  //     counter[animalName] += 1;
  //   }
  // });
  let counter = arr.reduce((counter, animalName) => {
    if (!(animalName in counter)) {
      counter[animalName] = 1;
    } else {
      counter[animalName] += 1;
    }
    return counter;
  }, {});
  // counter is accurate
  // keys and for loop
  // let keyArr = Object.keys(counter);
  // // let exotic = keyArr[0];
  // // for (let i = 1; i < keyArr.length; i++) {
  // //   let currentAnimal = keyArr[i];
  // //   if (counter[currentAnimal] < counter[exotic]) {
  // //     exotic = currentAnimal;
  // //   }
  // // }
  // // return exotic;
  // reduce
  // return keyArr.reduce((exotic, currentAnimal) => {
  //   if (counter[currentAnimal] < counter[exotic]) {
  //     return currentAnimal;
  //   } else {
  //     return exotic;
  //   }
  // });
  // no obj.keys
  let exotic = null;
  for (let currentAnimal in counter) {
    if (exotic === null || counter[currentAnimal] < counter[exotic]) {
      exotic = currentAnimal;
    }
  }
  return exotic;
};

// Test cases
let zoo1 = ["lion", "tiger", "bear", "lion", "lion", "bear"];
console.log(mostExotic(zoo1)); // 'tiger'

let zoo2 = ["dog", "dog", "bird", "cat", "cat", "dog", "cat", "bird"];
console.log(mostExotic(zoo2)); // 'bird'

let zoo3 = [];
console.log(mostExotic(zoo3)); // null
