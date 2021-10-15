import Cat from "./components/Cat/Cat";
import Card from "./components/UI/Card";
import "./App.css";
import Restart from "./components/UI/RestartButton";

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
