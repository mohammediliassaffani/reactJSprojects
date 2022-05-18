import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

// const newNumbers = numbers.map( x => x * x );

// console.log(newNumbers);

//

const newNumbers = numbers.map((x) => x * 2);
console.log(newNumbers);

//Map -Create a new array by doing something with each item in an array.

//Filter - Create a new array by keeping the items that return true.

// const newNumbers = numbers.filter(function (num) {
//   return num > 10;
// });
// console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.

// var newNumbers = numbers.reduce(function (Accumulate, currentNumber) {
//   console.log("Accumulate = " + Accumulate);
//   console.log("currentNumber = " + currentNumber);

//   return Accumulate + currentNumber;
// });
// console.log(newNumbers);

//Find - find the first item that matches from an array.

// const newNumbers = numbers.find(function (num) {
//   return num > 10;
// });
// console.log(newNumbers);

//FindIndex - find the index of the first item that matches.

// import emojipedia from "./emojipedia";

// const newEmojipedia = emojipedia.map(function (emojiEntry) {
//   return emojiEntry.meaning.substring(0, 100);
// });

// console.log(newEmojipedia);
