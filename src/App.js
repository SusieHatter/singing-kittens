import Cat from "./components/Cat/Cat";
import Card from "./components/UI/Card";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Singing Kittens</h1>
      <Card>
        <Cat name="white-cat" />
        <Cat name="white-cat" />
        <Cat name="white-cat" />
        <Cat name="white-cat" />
        <Cat name="white-cat" />
      </Card>
    </div>
  );
}

export default App;
