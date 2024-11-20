/*
// Методы split, sort, join

let text = "Привет+как+ваше+имя";
console.log(text);
let splitText = text.split("+");
console.log(splitText);

splitText.sort();
console.log(splitText);

let joinedText = splitText.join(" ");
console.log(joinedText);

let textNew = "Guy/Fawkes/tried/to/kill/the/king";
let combineText = textNew.split("/").sort().join(" ");
console.log(combineText);
*/

// Методы shift, pop, push, unshift
/*
let myArray = ["BMW", "Volvo", "Audi", "SEAT", "Opel"];
let firstItem = myArray.shift();
console.log(myArray);
console.log(firstItem);

//console.log(myArray.pop());
let lastItem = myArray.pop();
console.log(myArray);
console.log(lastItem);

myArray.push("Volkswagen");

console.log(myArray);

let newItem = myArray.unshift("Citroёn");
console.log(myArray);*/

//----------------------

let myText = 'advantage';

let myTextArray = myText.split('');
console.log(myTextArray);

let letterPosition = myTextArray.indexOf('t');

console.log(`Position of the letter "t" is ${letterPosition}.`);

let isContains = myTextArray.includes('b'); // Must be: false

console.log(isContains);
