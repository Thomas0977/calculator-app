import React, { useEffect, useRef } from "react";
import "./Header.css";

const Header = () => {
  const resultRef = useRef();
  useEffect(() => {
    resultRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="header custom-scroll">
      <div className="header_history">
        <p>1+2+3</p>
        <p>9+2/3</p>
        <p>1+2+3</p>
        <p>9+2/3</p>
        <p>1+2+3</p>
        <p>9+2/3</p>
      </div>
      <br />
      <div className="header_expression custom-scroll">
        <p>10+10+10</p>
        <p ref={resultRef} className="header_result">
          30
        </p>
      </div>
    </div>
  );
};
export default Header;
