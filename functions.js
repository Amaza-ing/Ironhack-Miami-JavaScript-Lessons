console.log("Functions");

// function statement

function sayHello() {
  console.log("Hello!");
}

sayHello();

function sum(n1, n2) {
  const result = n1 + n2;
  return result;
}

const sumResult = sum(5, 10);
console.log(sumResult);


// function expression

const sayHi = function() {
  console.log("Hi!");
}

sayHi();

const substract = function(n1, n2) {
  return n1 - n2;
}

const substractResult = substract(10, 3);
console.log(substractResult);


// Arrow functions

const sayGoodbye = () => {
  console.log("Goodbye!");
}

sayGoodbye();

const multiply = (n1, n2) => {
  return n1 * n2;
}

const multiplyResult = multiply(2, 10);
console.log(multiplyResult);

const saySomething = str => console.log(str);

saySomething("asdfasdf")

const toUpper = (str) => str.toUpperCase();

const upperStr = toUpper("asdf");
console.log(upperStr);


// Callbacks

const f1 = function() {
  console.log("I'm F1");
}

const f2 = function() {
  console.log("I'm F2");
}

function caller(callback) {
  console.log("------------");
  callback();
  console.log("------------");
}

caller(f1);
caller(f2);

caller(() => {
  console.log("I'm an anonymous arrow function");
})