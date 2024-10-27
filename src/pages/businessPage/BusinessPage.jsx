import React from "react";
import "./Business.css";
import ServiceHero from "../../components/serviceHero/ServiceHero";
import Business from "../../components/category/Business";

const BusinessPage = () => {
  return (
    <>
      <ServiceHero
        serviceHeroTitle="Business"
        serviceHeroDesc="Take your business to the next level."
        id="business-hero"
      />
      <Business />
    </>
  );
};

export default BusinessPage;
