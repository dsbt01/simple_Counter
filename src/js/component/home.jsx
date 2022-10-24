import React from "react";
import SimpleCounter from "./SimpleCounter/SimpleCounter.jsx";

//create your first component
const Home = (props) => {
  return (
    <div className="row">
      <SimpleCounter
        digitOne={props.digitOne}
        digitTwo={props.digitTwo}
        digitThree={props.digitThree}
        digitFour={props.digitFour}
      />
    </div>
  );
};

export default Home;
