import React from "react";
import ServiceHero from "../../components/serviceHero/ServiceHero";
import ProgrammingTech from "../../components/category/ProgrammingTech";

const ProgrammingTechPage = () => {
  return (
    <>
      <ServiceHero
        serviceHeroTitle="Programming & Tech"
        serviceHeroDesc="You think it. A programmer develops it."
        id="programming-tech-hero"
      />
      <ProgrammingTech />
    </>
  );
};

export default ProgrammingTechPage;
