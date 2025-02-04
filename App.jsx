import "./App.css";
import RandomVerse from "./components/RandomVerse";
import SpecificVerse from "./components/SpecificVerse";

function App() {
  return (
    <div className="container">
      <h1>Bible Verse Generator</h1>
      <RandomVerse />
      <SpecificVerse />
    </div>
  );
}

export default App;
