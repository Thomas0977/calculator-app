import React, { useState } from "react";

import "./App.css";

// import moon from "./assets/moon.png";
// import sun from "./assets/sun.png";

import Header from "./Components/Header/Header";
import Keypad from "./Components/Keypad/Keypad";

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="app" data-theme={isDarkMode ? "dark" : ""} >

      <div className="app_calculator">

        <div className="app_calculator_navbar">

          <div
            className="app_calculator_navbar_toggle"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            <div
              className={`app_calculator_navbar_toggle_circle ${
                isDarkMode ? "app_calculator_navbar_toggle_circle_active" : " "}`}
 >
              {/* <img src={isDarkMode ? moon : sun} alt="mode" /> */}
            </div>
          </div>
        </div>
        
        <Header />
        <Keypad />
          
      </div>
    </div>
  );
}

export default App;
