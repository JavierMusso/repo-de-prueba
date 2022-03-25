import React from "react";

function Card({ char }) {
  return (
    <div>
      <h2>
        {char.name}, {char.id}
      </h2>
      <img src={char.image} alt="" />
    </div>
  );
}

export default Card;
