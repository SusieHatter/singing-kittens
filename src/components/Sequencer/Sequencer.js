import React from "react";

import "./Sequencer.css";

const getBeatColor = (isOn, isPlaying) => {
  if (isOn) {
    if (isPlaying) {
      return "rgb(54, 189, 177)";
    } else {
      return "rgb(116, 56, 212)";
    }
  } else {
    if (isPlaying) {
      return "rgb(121, 255, 248)";
    } else {
      return "rgb(144, 104, 168)";
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
  <div className="sequence">
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
  <div className="sequencer">
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
