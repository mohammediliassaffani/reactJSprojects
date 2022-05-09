import React from "react";
import "./style.css";


function Card (props) {

  return (
    <div className="my-carde" >

      <h1>My Contacts</h1>

      <h2>{props.name}</h2>

      <img src={props.img} alt="avatar_img"/>

      <p>{props.tel}</p>

      <p>{props.email}</p>

    </div>
  );
}


function App() {
  return (
    <div className="App">
      <Card

        name="benon"
        img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        tel="+123 456 789"
        email="b@beyonce.com"

      />
      <Card

        name="7alima"
        img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        tel="+123 456 789"
        email="b@beyonce.com"

      />
      <Card

        name="karima"
        img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        tel="+123 456 789"
        email="b@beyonce.com"

      />
    </div>
  );
}

export default App;
