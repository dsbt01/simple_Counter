import React from "react";
import SimpleCounter from "./SimpleCounter/SimpleCounter.jsx";

//create your first component
const Home = () => {
  return (
    <div className="row">
      <SimpleCounter text="1" />
      <SimpleCounter text="2" />
    </div>
  );
};

export default Home;
