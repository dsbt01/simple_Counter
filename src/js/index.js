//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let counter = 0;

setInterval(function () {
  counter += 1;
  const four = Math.floor((counter / 1000) % 10);
  const three = Math.floor((counter / 100) % 10);
  const two = Math.floor((counter / 10) % 10);
  const one = Math.floor((counter / 1) % 10);

  ReactDOM.render(
    <Home digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />,
    document.querySelector("#app")
  );
}, 1000);
