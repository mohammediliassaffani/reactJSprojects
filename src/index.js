import React from "react";
import ReactDOM from "react-dom";

const city = "oujda";
const name = "iliass";
const age = 27;
const year = new Date().getFullYear();

ReactDOM.render(
  <div>
    <h2>hi from morocco {city} </h2>
    <p>
      this me helo {name} my age {age}
    </p>
    <p>
      Copyright &copy; {year} {name}
    </p>
  </div>,
  document.getElementById("root")
);
