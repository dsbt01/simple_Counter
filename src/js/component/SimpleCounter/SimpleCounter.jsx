import React from "react";

import "./simpleCounter.css"

const SimpleCounter = (props) => {
  return (
    <div className="main-counter">
        <h1 className="digit-style">{props.text}</h1>
    </div>  
  );
};

export default SimpleCounter;
