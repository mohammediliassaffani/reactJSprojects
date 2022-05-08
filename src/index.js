import React from "react";
import ReactDOM from "react-dom";

function Heading() {
  return <h1> med iliass ni</h1>;
}

ReactDOM.render(
  <div>
    <Heading />
    <ul>
      <li>iliass</li>
      <li>mohammed</li>
      <li>affani</li>
    </ul>
  </div>,
  document.getElementById("root")
);
