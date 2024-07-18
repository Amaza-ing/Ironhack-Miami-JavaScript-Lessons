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
