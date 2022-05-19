import React from "react";
import Login from "./Components/Login";

var isLoggedIn = false;

const currentTime = new Date().getHours();

function App() {
  return (
    <div className="container">
      {/* {isLoggedIn ? <h1>Hello</h1> : <Login />} */}

      {currentTime > 12 ? <h1> nod sire t9awad</h1> : null}
    </div>
  );
}

export default App;
