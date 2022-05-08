import React from "react";
import Heading from "./Components/Heading";
import pi, { year, age, salaire, brth } from "./Math";

function App() {
  return (
    <div>
      <Heading />
      <ul>
        <li>{pi}</li>
        <li>{year + 1}</li>
        <li>{age + 2}</li>
        <li>{brth()}</li>
        <li>{salaire()}</li>
      </ul>
    </div>
  );
}
export default App;
