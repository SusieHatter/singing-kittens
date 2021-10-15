import React from "react";

import Cat from "./components/Cat/Cat";
import Card from "./components/UI/Card";
import Restart from "./components/UI/RestartButton";

import "./App.css";

function App() {
  return (
    <div>
      <h1>Singing Kittens</h1>
      <Restart />
      <Card>
        <Cat name="white-cat" />
        <Cat name="stripped-cat" />
        <Cat name="orange-cat" />
        <Cat name="boop-cat" />
        <Cat name="black-cat" />
      </Card>
    </div>
  );
}

export default App;
