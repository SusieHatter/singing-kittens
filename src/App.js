import React, { useState } from "react";

import Cat from "./components/Cat/Cat";
import Card from "./components/UI/Card";
import Restart from "./components/UI/RestartButton";
import Sequencer from "./components/Sequencer/Sequencer";

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

const newSequence = (length) => {
  const sequence = [];
  for (let i = 0; i < length; i++) {
    sequence.push(false);
  }
  return sequence;
};

function App() {
  const [sequencer, setSequencer] = useState({
    "white-cat": newSequence(16),
    "black-cat": newSequence(16),
    "stripped-cat": newSequence(16),
    "orange-cat": newSequence(16),
    "boop-cat": newSequence(16),
  });

  const toggleBeat = (trackName, sequenceIndex) => {
    const sequence = sequencer[trackName];
    sequence[sequenceIndex] = !sequence[sequenceIndex];
    setSequencer({
      ...sequencer,
      [trackName]: sequence,
    });
  };

  const onClickCat = (name) => () => {
    playSound(name);
  };

  return (
    <div>
      <h1>Singing Kittens</h1>
      <Restart />
      <Card>
        {Object.keys(sequencer).map((name) => (
          <Cat key={name} name={name} onClick={onClickCat(name)} />
        ))}
        <Sequencer sequencer={sequencer} toggleBeat={toggleBeat} />
      </Card>
    </div>
  );
}

export default App;
