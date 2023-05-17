import React from "react";
import cell from "../assets/phoneLanding.png";
import Hero from "./Hero";

const Landing = () => {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1c2c4c",
        color: "#4c768d",
        width: "100%",
        height: "100vh",
        display: "flex",
        flex: 1,
      }}
    >
      <Hero />
    </div>
  );
};

export default Landing;
