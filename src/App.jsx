import React from "react";
import Card from "./components/Card";
import emojipedia from "./components/emojipedia";
import "./style.css"

function emojis(emojis) {
  return (
    <Card
      key={emojis.id}
      id={emojis.id}
      emoji = {emojis.emoji}
      name={emojis.name}
      meaning={emojis.meaning}
    />
  );

}


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(emojis)}

      </dl>
    </div>
  );
}

export default App;
