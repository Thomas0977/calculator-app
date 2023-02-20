import React, { useEffect, useRef } from "react";
import "./Header.css";

const Header = (props) => {
  const resultRef = useRef();
  const expressionRef = useRef();
  useEffect(() => {
    resultRef.current.scrollIntoView();
  }, [props.history]);

  useEffect(() => {
    expressionRef.current.scrollLeft = expressionRef.current.scrollWidth;
  }, [props.expression]);

  return (
    <div className="header custom-scroll">
      <div className="header_history">
        {props.history &&
          props.history?.map((item) => (
            <p key={item + "" + Math.random() * 77}>{item}</p>
          ))}
      </div>
      <br />
      <div ref={expressionRef} className="header_expression custom-scroll">
        <p>{props.expression}</p>
        <p ref={resultRef} className="header_result">
          {props.result}
        </p>
      </div>
    </div>
  );
};
export default Header;
