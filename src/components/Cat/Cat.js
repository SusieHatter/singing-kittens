import React from "react";

import "./Cat.css";

const Cat = (props) => {
  const playSound = () => {
    console.log("clicked!");
  };

  return (
    <img
      src={`./assets/images/${props.name}.png`}
      alt="Picture of Cat"
      onClick={playSound}
    />
  );
};

export default Cat;
