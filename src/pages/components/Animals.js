import React from "react";

const Animal = ({ name }) => <li>{name}</li>;

const Animals = () => {
  const animalList = ["dog", "cat", "tiger"];

  return (
    <ol>
      {animalList.map((animal, index) => (
        <Animal key={index} name={animal}></Animal>
      ))}
    </ol>
  );
};

export default Animals;
