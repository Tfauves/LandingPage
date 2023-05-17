import React from "react";
import heroImg from "../assets/phoneLanding.png";

const TiltedImage = () => (
  <div>
    <img
      style={{ transform: "rotate(15deg)", marginTop: "3em" }}
      src={heroImg}
      alt="Tilted Image"
    />
    <button onClick={playSound} className="overlay-button">
      btnsound1
    </button>
  </div>
);

const playSound = () => {
  return console.log("btn sound 1");
};

const Hero = () => {
  return TiltedImage();
};

export default Hero;
