/* 
Time: 15 mins
Write an arrow function called mostExotic that intakes an array
of animals and returns the animal that appears the least. If the 
array is empty return null.
*/

function mostExotic(arr) {
  if (arr.length === 0) {
    return null;
  }
  // let counter = {};
  // for (let i = 0; i < arr.length; i++) {
  //   let animal = arr[i];
  //   if (animal in counter) {
  //     counter[animal] += 1;
  //   } else {
  //     counter[animal] = 1;
  //   }
  // }

  let counter = arr.reduce((obj, animal) => {
    if (animal in obj) {
      obj[animal] += 1;
    } else {
      obj[animal] = 1;
    }
    return obj;
  }, {});
  
  let minAnimal = Object.keys(counter)[0];
  for (let animal in counter) {
    let currentMin = counter[minAnimal];
    let animalValue = counter[animal];
    if (animalValue < currentMin) {
      minAnimal = animal;
    }
  }
  return minAnimal;
}

let zoo1 = ["lion", "tiger", "bear", "lion", "lion", "bear"];

console.log(mostExotic(zoo1)); // 'tiger'

let zoo2 = ["dog", "dog", "bird", "cat", "cat", "dog", "cat", "bird"];

console.log(mostExotic(zoo2)); // 'bird'

let zoo3 = [];

console.log(mostExotic(zoo3)); // null
