import React from "react";
import "./DigitalMarketing.css";
import ServiceHero from "../../components/serviceHero/ServiceHero";
import DigitalMarketing from "../../components/category/DigitalMarketing";

const DigitalMarketingPage = () => {
  return (
    <>
      <ServiceHero
        serviceHeroTitle="Digital Marketing"
        serviceHeroDesc="Build Your Brand, Grow Your Business."
        id="digital-marketing-hero"
      />
      <DigitalMarketing />
    </>
  );
};

export default DigitalMarketingPage;
