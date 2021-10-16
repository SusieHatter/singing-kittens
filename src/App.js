import React, { useState } from "react";

import "./App.css";

import useInterval from "./hooks/useInterval";
import Cat from "./components/Cat/Cat";
import Card from "./components/UI/Card";
import Restart from "./components/UI/RestartButton";
import Sequencer from "./components/Sequencer/Sequencer";
import PlayIt from "./components/UI/PlayButton";
import { useEffect } from "react/cjs/react.development";

const BPM = 200;
const NUM_BEATS_IN_SEQUENCE = 16;

const sounds = {
  "white-cat": new Audio(`./assets/sounds/white-cat.wav`),
  "black-cat": new Audio(`./assets/sounds/black-cat.wav`),
  "stripped-cat": new Audio(`./assets/sounds/stripped-cat.wav`),
  "orange-cat": new Audio(`./assets/sounds/orange-cat.wav`),
  "boop-cat": new Audio(`./assets/sounds/boop-cat.wav`),
};

const playSound = (name) => {
  let sound = sounds[name];
  sound.cloneNode().play(); // cloned to allow same sound to play multiple times
};

const newSequence = (length) => {
  const sequence = [];
  for (let i = 0; i < length; i++) {
    sequence.push(false);
  }
  return sequence;
};

const INITIAL_STATE = {
  "white-cat": newSequence(NUM_BEATS_IN_SEQUENCE),
  "black-cat": newSequence(NUM_BEATS_IN_SEQUENCE),
  "stripped-cat": newSequence(NUM_BEATS_IN_SEQUENCE),
  "orange-cat": newSequence(NUM_BEATS_IN_SEQUENCE),
  "boop-cat": newSequence(NUM_BEATS_IN_SEQUENCE),
};

const getPlayingTracks = (sequencer, playingBeat) => {
  const playingTracks = [];
  for (let trackName in sequencer) {
    const sequence = sequencer[trackName];
    if (sequence[playingBeat]) {
      playingTracks.push(trackName);
    }
  }
  return playingTracks;
};

function App() {
  const [sequencer, setSequencer] = useState(INITIAL_STATE);
  const [playingBeat, setPlayingBeat] = useState(0);
  const [playing, setPlaying] = useState(false);

  // decode sequencer from url
  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const encodedSequencer = params["s"];
    if (!encodedSequencer) {
      return;
    }
    const newSequencer = JSON.parse(Buffer.from(encodedSequencer, "base64"));
    setSequencer(newSequencer);
  }, []);

  useInterval(() => {
    if (playing) {
      setPlayingBeat((playingBeat + 1) % NUM_BEATS_IN_SEQUENCE);
    }
  }, (1000 * 60) / BPM);

  if (playing) {
    const playingTracks = getPlayingTracks(sequencer, playingBeat);
    for (let trackName of playingTracks) {
      playSound(trackName);
    }
  }

  const resetSequencer = () => {
    setSequencer(INITIAL_STATE);
    setPlayingBeat(0);
    setPlaying(false);
  };

  const toggleBeat = (trackName, sequenceIndex) => {
    const sequence = [...sequencer[trackName]];
    sequence[sequenceIndex] = !sequence[sequenceIndex];
    const newSequencer = {
      ...sequencer,
      [trackName]: sequence,
    };
    // encode sequencer into url
    const encodedSequencer = Buffer.from(JSON.stringify(newSequencer)).toString(
      "base64"
    );
    const newurl =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      "?s=" +
      encodedSequencer;
    window.history.pushState({ path: newurl }, "", newurl);
    setSequencer(newSequencer);
  };

  const togglePlay = () => {
    setPlaying(!playing);
  };

  const onClickCat = (name) => () => {
    playSound(name);
  };

  return (
    <div>
      <h1>Singing Kittens</h1>
      <Restart onClick={resetSequencer} />
      <PlayIt onClick={togglePlay} playing={playing} />
      <Card>
        {Object.keys(sequencer).map((name) => (
          <Cat key={name} name={name} onClick={onClickCat(name)} />
        ))}
        <Sequencer
          sequencer={sequencer}
          toggleBeat={toggleBeat}
          playingBeat={playingBeat}
        />
      </Card>
    </div>
  );
}

export default App;
