import React from "react";
import ReactDOM from " reactdom";

const date = new.date();
const curentDate = date.getHours();

let text ;

const textColor = {
  color : ""
}

if (date.getHours() <12) {
  text = "hi";
  textColor.color="red";
} else if (date.getHours() =<12 && date.getHours() => 17){
  text = "hola";
  textColor.color ="black";
} else if (date.getHours()=>17 && date.gethours() =<23){
  text = "hello";
  textColor.color = "yelow";
} else {
  text = "no no"
}
