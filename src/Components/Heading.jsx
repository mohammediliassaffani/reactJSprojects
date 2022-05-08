import React from "react";

function Heading() {
  const date = new Date();
  const curentTime = date.getHours();

  let msg;

  const style = {
    color: ""
  };

  if (curentTime <= 12) {
    msg = "sabah khir";
    style.color = "red";
  } else if (curentTime >= 12 && curentTime <= 20) {
    msg = "masao nor";
    style.color = "bleu";
  } else if (curentTime >= 20 && curentTime <= 24) {
    msg = " tasbah ala khir ";
    style.color = " yellow";
  } else {
    msg = "nono";
  }

  return (
    <div style={style}>
      <h1> {msg} </h1>
    </div>
  );
}

export default Heading;
