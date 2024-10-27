import React from "react";
import "./ServiceHero.css";

const ProgrammingTechHero = ({serviceHeroTitle, serviceHeroDesc, id}) => {
  return (
    <main id={id}>
      <div className="programming-tech-main-header">
        <h1>{serviceHeroTitle}</h1>
        <p>{serviceHeroDesc}</p>
      </div>
    </main>
  );
};

export default ProgrammingTechHero;
