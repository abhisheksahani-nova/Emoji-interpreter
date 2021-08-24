import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😀": "Grinning Face",
  "😉": "Winking Face",
  "❤️": "Love",
  "😕": "Confused Face",
  "🐯": "Tiger Face",
  "😑": "Expressionless Face"
};

export default function App() {
  const [meaning, setMeaning] = useState("");

  return (
    <div className="App">
      <h1>Inside out</h1>
      <input style={{}} placeholder="Search your emoji" />
      <div> {meaning} </div>
    </div>
  );
}
