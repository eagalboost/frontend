import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../card/Card";
import {
  FaCode,
  FaPaintBrush,
  FaBullhorn,
  FaVideo,
  FaBusinessTime,
  FaPenNib,
} from "react-icons/fa";
import "./CardLayout.css";

const cardData = [
  {
    icon: <FaCode />,
    title: "Programming and Tech",
    description: "Get expert help with coding and tech solutions.",
    path: "/programming-tech",
  },
  {
    icon: <FaPaintBrush />,
    title: "Graphics & Design",
    description: "Create stunning designs for your brand.",
    path: "/graphics-design",
  },
  {
    icon: <FaBullhorn />,
    title: "Digital Marketing",
    description: "Promote your business with targeted marketing strategies.",
    path: "/digital-marketing",
  },
  {
    icon: <FaVideo />,
    title: "Video & Animation",
    description: "Create engaging videos and animations.",
    path: "/video-animation",
  },
  {
    icon: <FaBusinessTime />,
    title: "Business",
    description: "Grow your business with professional consulting.",
    path: "/business",
  },
  {
    icon: <FaPenNib />,
    title: "Writing & Translation",
    description: "Get top-quality writing and translation services.",
    path: "/writing-translation",
  },
];

const CardLayout = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <section className="card-layout">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="card-container"
          onClick={() => handleCardClick(card.path)}
        >
          <Card
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        </div>
      ))}
    </section>
  );
};

export default CardLayout;
