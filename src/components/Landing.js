import React from "react";
import Hero from "./Hero";
import Section from "./Section";
import Footer from "./Footer";

const Landing = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Section backgroundColor="#1c2c4c" textColor="#4c768d">
        <h1>check this cool whatever</h1>
        <h3>social logo imgs</h3>
      </Section>
      <Section backgroundColor="#4c1c2c" textColor="#8d4c76">
        <h1>see us live at these dates</h1>
        <h3>cards of the upcoming shows</h3>
      </Section>
      <Section backgroundColor="#2c4c1c" textColor="#768d4c">
        <h1>Shop</h1>
        <h3>buy lots of merch</h3>
      </Section>
      <Section backgroundColor="#1c2c4c" textColor="#4c768d">
        <Hero />
      </Section>
      <Footer />{" "}
    </div>
  );
};

export default Landing;
