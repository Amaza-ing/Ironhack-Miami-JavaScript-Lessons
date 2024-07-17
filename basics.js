console.log("Hello World");


// JavaScript number & string variables

let userName = "Adrián";
console.log(userName);
console.log(typeof userName);

let myNumber = 10;
console.log(myNumber);
console.log(typeof myNumber);

let sumResult = myNumber + 10;
console.log(sumResult);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 5);
myNumber++;
console.log(myNumber);


// String Methods

console.log(userName.toUpperCase());
console.log(userName.length); // length is not a method but is a property


// var keyword (deprecated)

var userAge = 25;
console.log(userAge);


// const constant variable

const pi = 3.1416;
console.log(pi);


// JavaScript data type infer

console.log("4" + 3);
console.log("4" - 3);


// Boolean data type

let myBoolean = true;
console.log(myBoolean);
console.log(typeof myBoolean);


// null & undefined data type

let myVariable;
console.log(myVariable);

let myNull = null;
console.log(myNull);


// Conditionals

userAge = 18;

if (userAge < 18) {
  console.log("user is a minor");
} else if (userAge === 18) {
  console.log("User is 18 years old");
} else {
  console.log("user is out of age");
}

if (10 === "10") {
  console.log("the condition is true");
}

let mark = 3;
let hasPassed = mark >= 5 ? true : false;
console.log(hasPassed);


// Truthy & Falsy values
// Truthy: true, 1234, "sdfa", [], {}
// Falsy: false, 0, "", undefined, null

let myCondition = undefined;
if (myCondition) console.log("condition is truthy");
else console.log("Condition is falsy");

let myStr = "";
if (myStr) console.log("myStr has some value");


// Loops

for(let i = 0; i <= 10; i++) {
  console.log(i);
}

let counter = 0;
while (counter < 10) {
  console.log(counter);
  counter++;
}


// Arrays

let numberArray = [10, 20, 30, 40, 50];
console.log(numberArray);

let myArray = [123, "fdgdfg", true, [], {}, null];
console.log(myArray);

numberArray[0] = 999;
console.log(numberArray);

numberArray.push(777);
console.log(numberArray);

numberArray.pop();
console.log(numberArray);

numberArray.unshift(1234);
console.log(numberArray);

numberArray.shift();
console.log(numberArray);

numberArray.forEach((number) => {
  console.log(number);
})


// Objects

let book = {
  title: "Harry Potter",
  author: "J.K Rowling",
  pages: 100,
  isBestSeller: true
}

console.log(book);