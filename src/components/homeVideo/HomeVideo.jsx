import React from 'react';
import './HomeVideo.css';
import HeroVideo from '../../assets/herovideo.mp4';

const HomeVideo = () => {
  return (
    <section className="home-video-section">
      <video
        src={HeroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="hero-video"
      ></video>
    </section>
  );
};

export default HomeVideo;
