/* 
Write a function called minAnimals that intakes an object
and min number. The function should return an array of keys
where the value is greater than or equal to the min number. 
*/

// your code here

//your code here

let zoo1 = {
    elephant: 1,
    zebra: 5,
    cobra: 20,
    polarBear: 2,
    giraffe: 3,
};

console.log(animalCounter(zoo1, 4)); // ["zebra", "cobra"]

let zoo2 = {
    elephant: 4,
    zebra: 2,
    cobra: 0,
    polarBear: 5,
    giraffe: 1,
};

console.log(animalCounter(zoo2, 4)); // ["elephant", "polarBear"]
