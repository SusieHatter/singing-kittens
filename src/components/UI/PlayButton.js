import React from "react";

const PlayIt = ({ playing, onClick }) => (
  <button onClick={onClick}>{playing ? "Pause" : "Play"}</button>
);

export default PlayIt;
