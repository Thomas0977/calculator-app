import React, { useState } from "react";

import "./App.css";

import moon from "./assets/moon.png";
import sun from "./assets/sun.png";

import Header from "./Components/Header/Header";
import KeyPad from "./Components/Keypad/Keypad";

const usedKeyCodes = [
  48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103,
  104, 105, 8, 13, 190, 187, 189, 191, 56, 111, 106, 107, 109,
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const operators = ["-", "+", "*", "/"];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [expression, setExression] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState("");

  const handleKeyPress = (keyCode, key) => {
    if (!keyCode) return;
    if (!usedKeyCodes.includes(keyCode)) return;

    if (numbers.includes(key)) {
      if (key === "0") {
        if (expression.length === 0) return;
      }
      calculateResult(expression + key);
      setExression(expression + key);
    } else if (operators.includes(key)) {
      if (!expression) return;

      const lastChar = expression.slice(-1);
      if (operators.includes(lastChar)) return;
      if (lastChar === ".") return;

      setExression(expression + key);
    } else if (key === ".") {
      if (!expression) return;
      const lastChar = expression.slice(-1);
      if (!numbers.includes(lastChar)) return;

      setExression(expression + key);
    } else if (keyCode === 8) {
      if (!expression) return;
      calculateResult(expression.slice(0,-1));
      setExression(expression.slice(0, -1));
    } else if (keyCode === 13) {
      if (!expression) return;
      calculateResult(expression);
    }
  };
  const calculateResult = (exp) => {
    if (!exp) {
      setResult("");
      return;
    }
    const lastChar = exp.slice(-1);
    if (!numbers.includes(lastChar)) exp = exp.slice(0, -1);

    const answer = eval(exp).toFixed(2) + "";
    setResult(answer);
  };

  return (
    <div
      className="app"
      tabIndex="0"
      onKeyDown={(event) => handleKeyPress(event.keyCode, event.key)}
      data-theme={isDarkMode ? "dark" : ""}
    >
      <div className="app_calculator">
        <div className="app_calculator_navbar">
          <img src={isDarkMode ? moon : sun} alt="mode" />

          <div
            className="app_calculator_navbar_toggle"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            <div
              className={`app_calculator_navbar_toggle_circle ${
                isDarkMode ? "app_calculator_navbar_toggle_circle_active" : " "
              }`}
            ></div>
          </div>
        </div>

        <Header expression={expression} result={result} />
        <KeyPad handleKeyPress={handleKeyPress} />
      </div>
    </div>
  );
}

export default App;
