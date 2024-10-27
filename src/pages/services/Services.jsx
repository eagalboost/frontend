import React, { useState } from "react";
import "./Services.css";
import Sidebar from "../../components/sidebar/Sidebar";
import ProgrammingTech from "../../components/category/ProgrammingTech";
import GraphicsDesign from "../../components/category/GraphicsDesign";
import DigitalMarketing from "../../components/category/DigitalMarketing";
import VideoAnimation from "../../components/category/VideoAnimation";
import Business from "../../components/category/Business";
import WritingTranslation from "../../components/category/WritingTranslation";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("programming-tech");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderComponent = () => {
    switch (selectedCategory) {
      case "programming-tech":
        return <ProgrammingTech />;
      case "graphics-design":
        return <GraphicsDesign />;
      case "digital-marketing":
        return <DigitalMarketing />;
      case "video-animation":
        return <VideoAnimation />;
      case "business":
        return <Business />;
      case "writing-translation":
        return <WritingTranslation />;
      default:
        return <ProgrammingTech />;
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <button className="toggle-sidebar" onClick={toggleSidebar}>
        {isSidebarOpen ? "Close" : "Open"} Sidebar
      </button>
      <Sidebar
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
        isOpen={isSidebarOpen}
      />
      <div className={`all-services ${isSidebarOpen ? "expanded" : ""}`}>
        {renderComponent()}
      </div>
    </>
  );
};

export default Services;
