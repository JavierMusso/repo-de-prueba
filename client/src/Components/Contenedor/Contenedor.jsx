import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";

export const Contenedor = () => {
  let characters = useSelector((state) => state.characters);

  return (
    <div>
      Contenedor
      {characters?.map((char) => {
        return <Card key={char.id} char={char} />;
      })}
    </div>
  );
};
