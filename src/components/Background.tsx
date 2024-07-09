import React from "react";
import pokeball1 from "../assets/pokeball1.png";
import pokeball2 from "../assets/pokeball2.png";

function Background() {
  return (
    <div className="background">
      <img src={pokeball1} alt="pokeball" className="pokeball pokeball-one"/>
      <img src={pokeball2} alt="pokeball" className="pokeball pokeball-two"/>
      <img src={pokeball1} alt="pokeball" className="pokeball pokeball-three"/>
      <img src={pokeball2} alt="pokeball" className="pokeball pokeball-four"/>
      <img src={pokeball1} alt="pokeball" className="pokeball pokeball-five"/>
      <img src={pokeball2} alt="pokeball" className="pokeball pokeball-six"/>
    </div>
  );
}

export default Background;