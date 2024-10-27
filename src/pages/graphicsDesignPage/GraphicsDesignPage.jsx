import React from "react";
import "./GraphicsDesign.css";
import ServiceHero from "../../components/serviceHero/ServiceHero";
import GraphicsDesign from "../../components/category/GraphicsDesign";

const GraphicsDesignPage = () => {
  return (
    <>
      <ServiceHero
        serviceHeroTitle="Graphics & Design"
        serviceHeroDesc="Design to make you stand out."
        id="graphics-design-hero"
      />
      <GraphicsDesign />
    </>
  );
};

export default GraphicsDesignPage;
