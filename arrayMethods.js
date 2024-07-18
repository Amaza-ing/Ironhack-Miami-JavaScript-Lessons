console.log("Array Methods!");

const numArray = [10, 20, 30];

const countries = ["USA", "Spain", "France"];

const products = [
  {
    name: "Computer",
    price: 1000,
    isForSale: true
  },
  {
    name: "TV",
    price: 500,
    isForSale: false
  },
  {
    name: "keyboard",
    price: 50,
    isForSale: true
  },
]


// forEach

numArray.forEach((number) => {
  console.log(number);
})

countries.forEach((country) => {
  console.log(country);
})

products.forEach((product) => {
  console.log(product);
})


// map

const doubleArray = numArray.map((number) => {
  return number * 2;
})
console.log(doubleArray);

const upperCountries = countries.map((country) => {
  return country.toUpperCase();
})
console.log(upperCountries);

const countryLength = countries.map((country) => country.length);
console.log(countryLength);

const productNameArray = products.map((product) => product.name);
console.log(productNameArray);


// filter

const filteredNums = numArray.filter((number) => number > 15);
console.log(filteredNums);

const filteredCountries = countries.filter((country) => country.length >= 4);
console.log(filteredCountries);

const forSaleProducts = products.filter((product) => product.isForSale);
console.log(forSaleProducts);


// reduce

console.log(numArray);

const sumResult = numArray.reduce((accumulator, currentValue) => {
  return currentValue + accumulator;
}, 0)
console.log(sumResult);

const multiplyResult = numArray.reduce((acc, cv) => {
  return cv * acc;
}, 1)
console.log(multiplyResult);

const concatCountries = countries.reduce((acc, cv) => {
  return cv + acc;
}, "")
console.log(concatCountries);


console.log(products);
const totalPrice = products.reduce((acc, cv) => {
  return cv.price + acc;
}, 0)
console.log(totalPrice);


// sort

const numbers = [1, 100000, 25, 3000, 27, 12];
numbers.sort((a, b) => {
  return b - a;
});
console.log(numbers);

countries.sort((a, b) => {
  return b.length - a.length;
})
console.log(countries);

products.sort((a, b) => {
  return b.price - a.price;
})
console.log(products);


// create a shallow copy of array

const productsCopy = products.map((product) => {
  return {...product};
});
console.log(productsCopy);


// reverse

console.log(countries);
countries.reverse();
console.log(countries);
