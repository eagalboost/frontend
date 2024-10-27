import React from "react";
import "./Sidebar.css";

const Sidebar = ({ setSelectedCategory, selectedCategory, isOpen }) => {
  const categories = [
    { name: "Programming & Tech", value: "programming-tech" },
    { name: "Graphics & Design", value: "graphics-design" },
    { name: "Digital Marketing", value: "digital-marketing" },
    { name: "Video & Animation", value: "video-animation" },
    { name: "Business", value: "business" },
    { name: "Writing & Translation", value: "writing-translation" },
  ];

  const handleClick = (category) => {
    setSelectedCategory(category.value);
  };

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <h3>Categories</h3>
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => handleClick(category)}
            className={selectedCategory === category.value ? "selected" : ""}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
