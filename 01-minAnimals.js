/* 
Time: 15 mins
Write a function called minAnimals that intakes an object
and min number. The function should return an array of keys
where the value is greater than or equal to the min number. 
*/

/* 
PLAN
Define a function called minAnimals(obj, num)
Iterate over the object's keys
  Filter the keys if they are >= the num
return the filter
*/

// const minAnimals = (obj, num) => {
//   const result = [];
//   for (let animalName in obj) {
//     let animalNum = obj[animalName];
//     if (animalNum >= num) {
//       result.push(animalName);
//     }
//   }
//   return result;
// };

const minAnimals = (obj, num) => Object.keys(obj).filter((animalName)=> obj[animalName] >= num)


// Test cases
let zoo1 = {
  elephant: 1,
  zebra: 5,
  cobra: 20,
  polarBear: 2,
  giraffe: 3,
};

console.log(minAnimals(zoo1, 4)); // ["zebra", "cobra"]

let zoo2 = {
  elephant: 4,
  zebra: 2,
  cobra: 0,
  polarBear: 5,
  giraffe: 1,
};

console.log(minAnimals(zoo2, 4)); // ["elephant", "polarBear"]
