/* 
Write a function called minAnimals that intakes an object
and min number. The function should return an array of keys
where the value is greater than or equal to the min number. 
*/

/*  
def my function 
def a res array
iterate through the obj
  for in loop
  check the key value pair
  if the value is >= the min
    push onto the res
return res
*/

function minAnimals(obj, min) {
  let res = [];
  for (let key in obj) {
    let value = obj[key];
    if (value >= min) {
      res.push(key);
    }
  }
  return res;

  // let keys = Object.keys(obj); // made an array of keys
  // let filtered = keys.filter((key) => obj[key] >= min); // filtered out less thans
  // return filtered;// returned the filtered array
}

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
