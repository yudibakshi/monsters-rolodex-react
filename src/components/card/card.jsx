import React from "react";

import "./card.css";

const Card = (props) => {
  const { name, id } = props.monster;
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt="monster"
      />
      <h1>{name}</h1>
      <p>{props.monster.email}</p>
    </div>
  );
};

export default Card;
