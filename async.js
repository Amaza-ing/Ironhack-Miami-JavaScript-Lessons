console.log("Async JS!");

// setTimeout & setInterval

// setTimeout(() => {
//   console.log("Inside the timeout");
// }, 1000)

// console.log("Hello");

// setInterval(() => {
//   console.log("Inside setInterval");
// }, 100)

// let counter = 0;

// const intervalId = setInterval(() => {
//   counter++;
//   console.log(counter);

//   if (counter >= 10) {
//     clearInterval(intervalId);
//   }
// }, 1000)


// Async JS: Callbacks

const directions = [
  "Starting point: Ironhack Miami",
  "↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue",
  "➔ Turn right onto S Miami Ave",
  "* Chipotle Mexican Grill 891 S Miami Ave, Miami",
];

// function getDirections(step, cb, errorCb) {
//   setTimeout(() => {

//     console.log(directions[step]);
  
//     if(!directions[step]) errorCb("There was something wrong");
//     else cb();

//   }, 500)
// }

// getDirections(0, () => {
//   getDirections(1, () => {
//     getDirections(2, () => {
//       getDirections(3, () => {
//         console.log("You have reacher your destination");
//       }, (errorMsg) => {console.log(errorMsg)})
//     }, (errorMsg) => {console.log(errorMsg)})
//   }, (errorMsg) => {console.log(errorMsg)})
// }, (errorMsg) => {console.log(errorMsg)})


// Async JS: Promises

function obtainDirections(step) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      console.log(directions[step]);
  
      if (!directions[step]) reject("Something went wrong");
      else resolve();

    }, 500)
  })
}

// .then syntax

// obtainDirections(0)
//   .then(() => obtainDirections(1))
//   .then(() => obtainDirections(2))
//   .then(() => obtainDirections(3))
//   .then(() => console.log("You have reacher your destination"))
//   .catch((errorMsg) => console.log(errorMsg))


// async/await syntax

// async function executeDirections() {
//   try {
//     await obtainDirections(0);
//     await obtainDirections(1);
//     await obtainDirections(2);
//     await obtainDirections(3);
    
//     console.log("You have reached your destination");
//   } catch(errorMsg) {
//     console.log(errorMsg);
//   }
// }

// executeDirections();


// fetch

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => console.log(data))

async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await response.json();
  console.log(data);
}

getUsers();