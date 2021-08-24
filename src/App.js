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

var emojiArray = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("translation will appear here..");

  function changeHandler(event) {
    var emojiMeaning = emojiDictionary[event.target.value];
    console.log(emojiMeaning);
    if (emojiMeaning) {
      setMeaning(emojiMeaning);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  return (
    <div className="App">
      <h1>Inside out</h1>
      <input onChange={changeHandler} placeholder="Search your emoji" />
      <div
        className="outputDiv"
        style={{ paddingTop: "15px", paddingBottom: "20px" }}
      >
        {meaning}
      </div>
      <ul>
        {emojiArray.map((singleEmoji) => {
          return <li> {singleEmoji} </li>;
        })}
      </ul>
    </div>
  );
}
