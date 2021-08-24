import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🌠": "Shooting Star",
  "😉": "Winking Face",
  "❤️": "Love",
  "🤩": "Star-Struck",
  "🐯": "Tiger Face",
  "😑": "Expressionless Face"
};

var emojiArray = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("translation will appear here..");
  const [emoji, setEmoji] = useState("");

  function changeHandler(event) {
    var userInput = event.target.value;
    setEmoji(userInput);
    var emojiMeaning = emojiDictionary[userInput];

    if (emojiMeaning) {
      setMeaning(emojiMeaning);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function clickHandler(singleEmoji) {
    setEmoji(singleEmoji);
    var emojiMeaning = emojiDictionary[singleEmoji];
    setMeaning(emojiMeaning);
  }

  return (
    <div className="App">
      <h1>Emoji Dictionary</h1>
      <input onChange={changeHandler} placeholder="Search your emoji" />
      <div className="showEmojiDiv">{emoji}</div>
      <div
        className="showMeaningDiv"
        style={{ paddingTop: "15px", paddingBottom: "20px" }}
      >
        {meaning}
      </div>
      <ul>
        {emojiArray.map((singleEmoji, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                clickHandler(singleEmoji);
              }}
            >
              {" "}
              {singleEmoji}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
