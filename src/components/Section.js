import React from "react";

const Section = ({ title, subtitle, dark, id, image }) => {
  const sectionClassName = "section" + (dark ? " section-dark" : "");

  return (
    <div className={sectionClassName}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <img className="sectionImg" src={image} />
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Section;
