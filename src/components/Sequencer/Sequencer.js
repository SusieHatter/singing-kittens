import React from "react";

import "./Sequencer.css";

const getBeatColor = (isOn, isPlaying) => {
  if (isOn) {
    if (isPlaying) {
      return "lightgreen";
    } else {
      return "green";
    }
  } else {
    if (isPlaying) {
      return "yellow";
    } else {
      return "red";
    }
  }
};

const Beat = ({ isOn, isPlaying, onClick }) => (
  <div
    className="beat"
    onClick={onClick}
    style={{ background: getBeatColor(isOn, isPlaying) }}
  ></div>
);

const Sequence = ({ sequence, trackName, toggleBeat, playingBeat }) => (
  <div>
    {sequence.map((beat, i) => (
      <Beat
        key={i}
        onClick={() => toggleBeat(trackName, i)}
        isOn={beat}
        isPlaying={i === playingBeat}
      />
    ))}
  </div>
);

const Sequencer = ({ sequencer, toggleBeat, playingBeat }) => (
  <div>
    {Object.entries(sequencer).map(([trackName, sequence]) => (
      <Sequence
        key={trackName}
        sequence={sequence}
        trackName={trackName}
        toggleBeat={toggleBeat}
        playingBeat={playingBeat}
      />
    ))}
  </div>
);

export default Sequencer;
