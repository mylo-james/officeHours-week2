/* 
Write a function called sentenceMaker that intakes a string.
SentenceMaker will return a new function that will allow you to add
new words to the end of your sentence.
*/

//your code here

let helloSentence = sentenceMaker('Hello');
console.log(helloSentence); // [Function]
console.log(helloSentence('there!')); // Hello there!

let joke = sentenceMaker('Why');
console.log(joke);
[Function];
console.log(joke('the long face?')); // "Why the long face?"
console.log(joke('the long face?')); // "Why the long face?"
