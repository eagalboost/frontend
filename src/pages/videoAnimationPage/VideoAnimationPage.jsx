import React from "react";
import "./VideoAnimation.css";
import ServiceHero from "../../components/serviceHero/ServiceHero";
import VideoAnimation from "../../components/category/VideoAnimation";

const VideoAnimationPage = () => {
  return (
    <>
      <ServiceHero
        serviceHeroTitle="Video & Animation"
        serviceHeroDesc="Bring your story to life with creative videos."
        id="video-animation-hero"
      />
      <VideoAnimation />
    </>
  );
};

export default VideoAnimationPage;
