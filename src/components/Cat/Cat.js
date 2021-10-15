import React from "react";

import "./Cat.css";

const Cat = ({ name, onClick }) => {
  return (
    <img src={`./assets/images/${name}.png`} alt={name} onClick={onClick} />
  );
};

export default Cat;
