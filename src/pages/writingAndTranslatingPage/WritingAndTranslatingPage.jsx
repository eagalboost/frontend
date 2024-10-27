import React from "react";
import "./WritingAndTranslating.css";
import ServiceHero from "../../components/serviceHero/ServiceHero";
import WritingTranslation from "../../components/category/WritingTranslation";

const WritingAndTranslatingPage = () => {
  return (
    <>
      <ServiceHero
        serviceHeroTitle="Writing & Translation"
        serviceHeroDesc="Get your words across—in any language."
        id="writing-translation-hero"
      />
      <WritingTranslation />
    </>
  );
};

export default WritingAndTranslatingPage;
