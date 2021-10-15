import React from "react";

import Cat from "./components/Cat/Cat";
import Card from "./components/UI/Card";
import Restart from "./components/UI/RestartButton";

import "./App.css";

const sounds = {
  "white-cat": new Audio(`./assets/sounds/white-cat.wav`),
  "black-cat": new Audio(`./assets/sounds/black-cat.wav`),
  "stripped-cat": new Audio(`./assets/sounds/stripped-cat.wav`),
  "orange-cat": new Audio(`./assets/sounds/orange-cat.wav`),
  "boop-cat": new Audio(`./assets/sounds/boop-cat.wav`),
};

const playSound = (name) => {
  let sound = sounds[name];
  sound.play();
};

function App() {
  const onClickCat = (name) => () => {
    playSound(name);
  };

  return (
    <div>
      <h1>Singing Kittens</h1>
      <Restart />
      <Card>
        {Object.keys(sounds).map((name) => (
          <Cat name={name} onClick={onClickCat(name)} />
        ))}
      </Card>
    </div>
  );
}

export default App;
