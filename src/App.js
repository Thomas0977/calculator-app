import React, { useState } from "react";

import "./App.css";

import moon from "./assets/moon.png";
import sun from "./assets/sun.png";

import Header from "./Components/Header/Header";
import KeyPad from "./Components/Keypad/Keypad";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleKeyPress = (keyCode, key) => {
    console.log(keyCode, key);
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

        <Header />
        <KeyPad handleKeyPress={handleKeyPress} />
      </div>
    </div>
  );
}

export default App;
