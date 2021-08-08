/* 
Time: 15 mins
Write a function called sentenceMaker that intakes a string.
sentenceMaker will return a new function that will allow you to add
new words to the end of your sentence. 
*/
/* 
Plan
define a function called sentenceMaker(initStr)
return new function(str)
  change the initStr var to be the old initStr var with a space and the str added to the end
  return the edited initStr
*/

// const sentenceMaker = (initStr) => {
//   return (str) => {
//     return initStr += " " + str;
//   };
// };

const sentenceMaker = (...initStr) => {
  return (...str) => {
    initStr = [...initStr, ...str];
    return initStr.join(" ");
  };
};

// Test cases
let helloSentence = sentenceMaker("Hello");
console.log(helloSentence); // [Function]
console.log(helloSentence("there!")); // Hello there!

let joke = sentenceMaker("Why");
console.log(joke); //[Function]
console.log(joke("the long")); // "Why the long"
console.log(joke("face?")); // "Why the long face?"
