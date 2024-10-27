import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";
import Search from "../../assets/DigitalMarketing/Search.jpg";
import Social from "../../assets/DigitalMarketing/Social.jpg";
import MethodTechnique from "../../assets/DigitalMarketing/MethodTechnique.jpg";
import Strategy from "../../assets/DigitalMarketing/Strategy.jpg";

const DigitalMarketing = () => {
  const services = [
    {
      name: "Search",
      imageUrl: Search,
      links: [
        {
          name: "Search Engine Optimization (SEO)",
          to: "/digital-marketing/search-engine-optimization",
        },
        {
          name: "Search Engine Marketing (SEM",
          to: "/digital-marketing/search-engine-marketing",
        },
        { name: "Local SEO", to: "/digital-marketing/local-seo" },
        { name: "Ecommerce SEO", to: "/digital-marketing/ecommerce-seo" },
        { name: "Video SEO", to: "/digital-marketing/video-seo" },
      ],
    },
    {
      name: "Social",
      imageUrl: Social,
      links: [
        {
          name: "Social Media Marketing",
          to: "/digital-marketing/social-media-marketing",
        },
        {
          name: "Paid Social Media",
          to: "/digital-marketing/paid-social-media",
        },
        { name: "Social Commerce", to: "/digital-marketing/social-commerce" },
        {
          name: "Influencer Marketing",
          to: "/digital-marketing/influencer-marketing",
        },
        {
          name: "Community Management",
          to: "/digital-marketing/community-management",
        },
      ],
    },
    {
      name: "Methods & Technique",
      imageUrl: MethodTechnique,
      links: [
        { name: "Video Marketing", to: "/digital-marketing/video-marketing" },
        {
          name: "Ecommerce Marketing",
          to: "/digital-marketing/ecommerce-marketing",
        },
        {
          name: "Affiliate Marketing",
          to: "/digital-marketing/affiliate-marketing",
        },
        {
          name: "Display Advertising",
          to: "/digital-marketing/display-advertising",
        },
      ],
    },
    {
      name: "Analytics Strategy",
      imageUrl: Strategy,
      links: [
        {
          name: "Marketing Strategy",
          to: "/digital-marketing/marketing-strategy",
        },
        { name: "Marketing Advice", to: "/digital-marketing/marketing-advice" },
        { name: "Web Analytics", to: "/digital-marketing/web-analytics" },
      ],
    },
  ];

  return (
    <section className="digital-marketing-container">
      <div className="service-category-header">
        <h2>Featured Digital Marketing</h2>
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

export default DigitalMarketing;
