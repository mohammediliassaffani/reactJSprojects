import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function incre() {
    setCount(count + 1);
  }
  function incree() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={incre}>+</button>
      <button onClick={incree}>-</button>
    </div>
  );
}

export default App;
