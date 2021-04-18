/* 
Write an arrow function called mostExotic that intakes an array
of animals and returns the animal that appears the least
*/

let mostExotic = (animalArr) => {
    // let counter = {};
    
    // animalArr.forEach((animal) => {
    //     if (!(animal in counter)) {
    //         counter[animal] = 1;
    //     } else {
    //         counter[animal] += 1;
    //     }
    // });

    let counter = animalArr.reduce((accum, animal) => {
        if (!(animal in accum)) {
            accum[animal] = 1; 
        } else {
            accum[animal] += 1;
        }
        return accum;
    }, {});
    console.log(counter);
    // iterate through the obj and find the value that's the least and return that key
    let minValue = Infinity;
    let minKey = null;

    for (let key in counter) {
        let value = counter[key];
        if (value < minValue) {
            minValue = value;
            minKey = key;
        }
    }
    return minKey;
};

let zoo1 = ['lion', 'tiger', 'bear', 'lion', 'lion', 'bear'];

console.log(mostExotic(zoo1)); // 'tiger'

let zoo2 = ['dog', 'dog', 'bird', 'cat', 'cat', 'dog', 'cat', 'bird'];

console.log(mostExotic(zoo2)); // 'bird'

let zoo3 = [];

console.log(mostExotic(zoo3)); // null
