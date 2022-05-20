import React from "react";

var count = 0;

function incre() {
  console.log("i got clickt");
}

function App() {
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={incre}>+</button>
      <button>-</button>
    </div>
  );
}

export default App;
