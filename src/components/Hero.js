import React, { useState } from "react";
import heroImg from "../assets/phoneLanding.png";
import PhoneButtonSound from "./PhoneButtonSound";

const TiltedImage = () => (
  <div className="image-container">
    <img
      style={{ transform: "rotate(15deg)", marginTop: "3em" }}
      src={heroImg}
      alt="Tilted Image"
    />
  </div>
);

const playSound = (sound) => {
  const audio = new Audio(sound);
  audio.play();
};

const Hero = () => {
  return (
    <div>
      {TiltedImage()}
      <PhoneButtonSound />
    </div>
  );
};

export default Hero;
