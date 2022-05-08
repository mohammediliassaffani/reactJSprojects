import React from "react";
import ReactDOM from "react-dom";

// const date = new Date();
// const curentDate = date.getHours();

// let text;

// const textColor = {
//   color: ""
// };

// /* hour is before noon */

// if (date.getHours() < 12) {
//   text = "Good Mornin!";
//   textColor.color = "red";
// } else if (date.getHours() >= 12 && date.getHours() <= 17) {
//   /* Hour is from noon to 5pm (actually to 5:59 pm) */
//   text = "Good Afternoon!";
//   textColor.color = "black";
// } else if (date.getHours() > 17 && date.getHours() <= 24) {
//   /* the hour is after 5pm, so it is between 6pm and midnight */
//   text = "Good Evening!";
//   textColor.color = "blrue";
// } else {
//   /* the hour is not between 0 and 24, so something is wrong */
//   text = "I'm not sure what time it is!";
// }

const date = new Date();
const curentDate = date.getHours();

let text;

const textColor = {
  color: ""
};

if (date.getHours() < 12) {
  text = "hi";
  textColor.color = "red";
} else if (date.getHours() <= 12 && date.getHours() <= 17) {
  text = "hola";
  textColor.color = "black";
} else if (date.getHours() >= 17 && date.getHours() <= 23) {
  text = "hello";
  textColor.color = "yelow";
} else {
  text = "no no";
}

ReactDOM.render(
  <div className="heading" style={textColor}>
    <h1> {text}</h1>
  </div>,
  document.getElementById("root")
);
