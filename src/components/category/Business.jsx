import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";
import BusinessFormation from "../../assets/Business/BusinessFormation.jpg";
import GeneralAdminstrative from "../../assets/Business/GeneralAdminstrative.jpg";
import SalesCustomerCare from "../../assets/Business/SalesCustomerCare.jpg";

const Business = () => {
  const services = [
    {
      name: "Business Formation & Growth",
      imageUrl: BusinessFormation,
      links: [
        { name: "Market Research", to: "/business/market-research" },
        { name: "Business Plan", to: "/business/business-plan" },
        { name: "Business Consulting", to: "/business/business-consulting" },
        { name: "Software Management", to: "/business/software-management" },
      ],
    },
    {
      name: "General Adminstrative",
      imageUrl: GeneralAdminstrative,
      links: [
        { name: "Virtual Assistant", to: "/business/virtual-assistant" },
        { name: "Ecommerce Management", to: "/business/ecommerce-management" },
        { name: "Project Management", to: "/business/project-management" },
      ],
    },
    {
      name: "Sales & Customer Supports",
      imageUrl: SalesCustomerCare,
      links: [
        { name: "Sales", to: "/business/sales" },
        { name: "Lead Generation", to: "/business/lead-generation" },
        { name: "Call Center & Calling", to: "/business/call-center" },
        { name: "Customer Care", to: "/business/customer-care" },
      ],
    },
  ];

  return (
    <section className="business-container">
      <div className="service-category-header">
        <h2>Featured Business Services</h2>
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

export default Business;
