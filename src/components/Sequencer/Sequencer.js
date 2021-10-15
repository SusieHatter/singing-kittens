import React from "react";

import "./Sequencer.css";

const Beat = ({ isOn, onClick }) => (
  <div
    className="beat"
    onClick={onClick}
    style={{ background: isOn ? "green" : "red" }}
  ></div>
);

const Sequence = ({ sequence, trackName, toggleBeat }) => (
  <div>
    {sequence.map((beat, i) => (
      <Beat key={i} onClick={() => toggleBeat(trackName, i)} isOn={beat} />
    ))}
  </div>
);

const Sequencer = ({ sequencer, toggleBeat }) => (
  <div>
    {Object.entries(sequencer).map(([trackName, sequence]) => (
      <Sequence
        key={trackName}
        sequence={sequence}
        trackName={trackName}
        toggleBeat={toggleBeat}
      />
    ))}
  </div>
);

export default Sequencer;
