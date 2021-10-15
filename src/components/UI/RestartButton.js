import "./RestartButton.css";

const Restart = () => {
  const pressedRestart = () => {
    console.log("Clicked restart!");
  };

  return <button onClick={pressedRestart}>Restart</button>;
};

export default Restart;
