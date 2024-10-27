import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";
import EditingPostProduction from "../../assets/VideoAnimation/EditingPostProduction.jpg";
import Animation from "../../assets/VideoAnimation/Animation.jpg";
import MotionGraphics from "../../assets/VideoAnimation/MotionGraphics.jpg";
import SocialMarketingVideo from "../../assets/VideoAnimation/SocialMarketingVideo.jpg";

const VideoAnimation = () => {
  const services = [
    {
      name: "Editing & Post Production",
      imageUrl: EditingPostProduction,
      links: [
        { name: "Video Editing", to: "/video-animation/video-editing" },
        { name: "Visual Effect", to: "/video-animation/visual-effect" },
        {
          name: "Intro & Outro Videos",
          to: "/video-animation/intro-outro-videos",
        },
        {
          name: "Video Templates Editing",
          to: "/video-animation/video-template-editing",
        },
        {
          name: "Subtitle & Captions",
          to: "/video-animation/subtitle-caption",
        },
      ],
    },
    {
      name: "Animation",
      imageUrl: Animation,
      links: [
        { name: "2D Animation", to: "/video-animation/2d-animation" },
        { name: "3D Animation", to: "/video-animation/3d-animation" },
        {
          name: "Character Animation",
          to: "/video-animation/character-animation",
        },
        {
          name: "Whiteboard Animation",
          to: "/video-animation/whiteboard-animation",
        },
        { name: "Explainer Videos", to: "/video-animation/explainer-videos" },
      ],
    },
    {
      name: "Motion Graphics",
      imageUrl: MotionGraphics,
      links: [
        { name: "Animated Logos", to: "/video-animation/animated-logos" },
        {
          name: "Lottie & Web Animation",
          to: "/video-animation/lottie-web-animation",
        },
        { name: "Text Animation", to: "/video-animation/text-animation" },
        { name: "Motion Tracking", to: "/video-animation/motion-tracking" },
        {
          name: "Transitions & Effects",
          to: "/video-animation/transitions-effects",
        },
      ],
    },
    {
      name: "Social & Marketing Videos",
      imageUrl: SocialMarketingVideo,
      links: [
        {
          name: "Vidoe & Commercials",
          to: "/video-animation/video-commercial",
        },
        {
          name: "Social Media Videos",
          to: "/video-animation/social-media-video",
        },
        { name: "Slideshow Videos", to: "/video-animation/slideshow-video" },
        {
          name: "Explainer Video Production",
          to: "/video-animation/explainer-video-production",
        },
      ],
    },
  ];

  return (
    <section className="video-animation-container">
      <div className="service-category-header">
        <h2>Featured Video & Animation</h2>
      </div>

      <div className="sub-category-card-wrapper">
        {services.map((service) => (
          <div key={service.name} className="sub-category-card">
            <img src={service.imageUrl} alt={service.name} />
            <h3>{service.name}</h3>
            <div className="sub-category-links">
              {service.links.map((link, index) => (
                <Link key={index} to={link.to} className="sub-category-link">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoAnimation;
