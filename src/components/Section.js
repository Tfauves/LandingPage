import React from "react";
import Hero from "./Hero";

const Section = ({ backgroundColor, textColor, children, id }) => {
  const sectionStyle = {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: backgroundColor,
    color: textColor,
    width: "100%",
    display: "flex",
    flex: "1 0 auto",
    minHeight: "65vh",
  };

  return (
    <section id={id} style={sectionStyle}>
      {children}
    </section>
  );
};

export default Section;
