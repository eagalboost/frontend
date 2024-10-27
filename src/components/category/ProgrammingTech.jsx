import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";
import WebSiteDev from "../../assets/ProgrammingTech/WebSiteDev.jpg";
import ApplicationDev from "../../assets/ProgrammingTech/ApplicationDev.jpg";
import WebPlatform from "../../assets/ProgrammingTech/WebsitePlatform.jpg";
import SupportSecurity from "../../assets/ProgrammingTech/SupportSecurity.jpg";

const ProgrammingTech = () => {
  const services = [
    {
      name: "Website Development",
      imageUrl: WebSiteDev,
      links: [
        { name: "Website Development", to: "/programming-tech/web-development" },
        { name: "Website Maintenance", to: "/programming-tech/website-maintenance" },
        { name: "Wordpress", to: "/programming-tech/wordpress" },
        { name: "Shopify", to: "/programming-tech/shopify" },
        { name: "Custom Websites", to: "/programming-tech/custom-websites" },
      ],
    },
    {
      name: "Mobile Apps",
      imageUrl: ApplicationDev,
      links: [
        { name: "Mobile App Development", to: "/programming-tech/mobile-app-development" },
        { name: "Cross-platform Apps", to: "/programming-tech/cross-platform-app" },
        { name: "Android App Development", to: "/programming-tech/android-app-development" },
        { name: "iOS App Development", to: "/programming-tech/ios-app-development" },
        { name: "Mobile App Maintenance", to: "/programming-tech/mobile-app-maintenance" },
      ],
    },
    {
      name: "Web Platforms",
      imageUrl: WebPlatform,
      links: [
        { name: "Wix", to: "/programming-tech/wix" },
        { name: "Webflow", to: "/programming-tech/webflow" },
        { name: "GoDaddy", to: "/programming-tech/godaddy" },
        { name: "Squarespace", to: "/programming-tech/squarespace" },
        { name: "WooCommerce", to: "/programming-tech/woocommerce" },
      ],
    },
    {
      name: "Support & Security",
      imageUrl: SupportSecurity,
      links: [
        { name: "Support & IT", to: "/programming-tech/support-it" },
        { name: "Cloud Computing", to: "/programming-tech/cloud-computing" },
        { name: "Cyber Security", to: "/programming-tech/cyber-security" },
        { name: "Convert Files", to: "/programming-tech/convert-files" },
      ],
    },
  ];

  return (
    <section className="programming-tech-container">
      <div className="service-category-header">
        <h2>Featured Programming & Tech</h2>
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

export default ProgrammingTech;
