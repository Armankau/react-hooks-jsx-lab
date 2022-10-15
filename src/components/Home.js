import React from "react";
import { name, city } from "../data/data.js";

function Home(name, city) {
  // update the JSX being returned!
  return (
  <div id="home">Home
    <h1 style="firebrick">{name} is a web Web Developer from {city}</h1>
  </div>);
}

export default Home;
