import React, { useState } from "react";
import heroImg from "../assets/phoneLanding.png";
import PhoneButtonSound from "./PhoneButtonSound";

const TiltedImage = () => (
  <div className="image-container">
    <img
      style={{ transform: "rotate(25deg)", marginTop: "3em" }}
      src={heroImg}
      alt="Tilted Image"
    />
    <PhoneButtonSound />
  </div>
);

const Hero = () => {
  return <div>{TiltedImage()}</div>;
};

export default Hero;
