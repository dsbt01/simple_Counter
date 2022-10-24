import React from "react";

import "./simpleCounter.css";

const SimpleCounter = (props) => {
  return (
    <div className="main-counter">
      <div>
        <div className="calendar">
          <i className="far fa-clock" />
        </div>
        <div className="digitFour">{props.digitFour}</div>
        <div className="digitThree">{props.digitThree}</div>
        <div className="digitTwo">{props.digitTwo}</div>
        <div className="digitOne">{props.digitOne}</div>
      </div>
    </div>
  );
};

export default SimpleCounter;
