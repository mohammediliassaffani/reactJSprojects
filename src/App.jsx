import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "./components/notes";




function App() {
  return (
    <div>
      <Header />
     {notes.map (( noteItem) => ( 
  <Note 
  title = {noteItem.title}
  content = {noteItem.content}
  />
)) }
      <Footer />
    </div>
  );
}

export default App;
