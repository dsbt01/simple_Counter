import React from "react";

import "./simpleCounter.css";

const SimpleCounter = (props) => {
  return (
    <div className="main-counter">
      <div>
        <div className="calendar">
          <i className="far fa-clock" />
        </div>
        <div className="digitFour">{props.text}</div>
        <div className="digitThree">{props.text}</div>
        <div className="digitTwo">{props.text}</div>
        <div className="digitOne">{props.text}</div>
      </div>
    </div>
  );
};

export default SimpleCounter;
