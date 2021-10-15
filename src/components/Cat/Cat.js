import React from "react";

import "./Cat.css";

const sounds = {
  "white-cat": new Audio(`./assets/sounds/white-cat.wav`),
  "black-cat": new Audio(`./assets/sounds/black-cat.wav`),
  "stripped-cat": new Audio(`./assets/sounds/stripped-cat.wav`),
  "orange-cat": new Audio(`./assets/sounds/orange-cat.wav`),
  "boop-cat": new Audio(`./assets/sounds/boop-cat.wav`),
};

const Cat = (props) => {
  const playSound = () => {
    let sound = sounds[props.name];
    sound.play();
  };

  return (
    <img
      src={`./assets/images/${props.name}.png`}
      alt="Cat"
      onClick={playSound}
    />
  );
};

export default Cat;
