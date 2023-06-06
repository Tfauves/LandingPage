import React from "react";
import Hero from "./Hero";
import Section from "./Section";
import Footer from "./Footer";
import socialLogos from "../assets/socialLogos.png";
import heroImg from "../assets/bandHero.jpg";

const Landing = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Section
        id="section1"
        backgroundImage={heroImg}
        backgroundColor="#1c2c4c"
        textColor="#4c768d"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <img
            style={{ paddingTop: "10px" }}
            src={socialLogos}
            alt="Social Logos"
          />
        </div>
      </Section>
      <Section id="section2" backgroundColor="#4c1c2c" textColor="#8d4c76">
        <h1>see us live at these dates</h1>
        <h3>cards of the upcoming shows</h3>
      </Section>
      <Section id="section3" backgroundColor="#2c4c1c" textColor="#768d4c">
        <h1>Shop</h1>
        <h3>buy lots of merch</h3>
      </Section>
      <Section id="section4" backgroundColor="#1c2c4c" textColor="#4c768d">
        <Hero />
      </Section>
      <Footer />{" "}
    </div>
  );
};

export default Landing;
