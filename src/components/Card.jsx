import React from "react";


function Card(props) {
  return (
    <dl className="dictionary">

      <div className="term">
        <dt>
          <p>{props.id}</p>
          <span className="emoji" > {props.emoji}  </span>
          <span className="name">{props.name}</span>
          <dd>{props.meaning}</dd>
        </dt>
      </div>

    </dl>
  );
}

export default Card;
