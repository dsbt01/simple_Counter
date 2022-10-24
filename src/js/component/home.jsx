import React from "react";
import SimpleCounter from "./SimpleCounter/SimpleCounter.jsx";

//create your first component
const Home = () => {
  return (
    <div className="row">
      <SimpleCounter text="1" />
    </div>
  );
};

export default Home;
