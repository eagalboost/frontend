import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import "../../components/subCategory/SubCategory.css";
import "./ServiceList.css";
import { Link, useLocation } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";

const ServiceList = () => {
  const [services, setServices] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("programming-tech");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const categoryParam = selectedCategory
          ? selectedCategory.replace(" ", "-")
          : "programming-tech";

        const response = await axios.get(
          `https://eaglesboost.com/api/services?category=${categoryParam}`
        );
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, [selectedCategory]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <button className="service-list__toggle-sidebar" onClick={toggleSidebar}>
        {isSidebarOpen ? "Close" : "Open"} Sidebar
      </button>
      <Sidebar
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
        isOpen={isSidebarOpen}
      />
      <section className="service-list__container">
        <h2 className="service-list__title">
          {selectedCategory.replace("-", " ").toUpperCase()} Services
        </h2>
        <div className="service-list__grid">
          {services.length > 0 ? (
            services.map((service) => (
              <Link
                key={service._id}
                to={`/service/${service._id}`}
                className="service-list__card"
              >
                <img
                  src={service.coverImage}
                  alt={service.shortTitle}
                  className="service-list__image"
                />
                <h3 className="service-list__service-title">
                  {service.shortTitle}
                </h3>
                <p className="service-list__desc">{service.shortDesc}</p>
                <div className="service-list__stats">
                  <div className="service-list__rating">
                    <FaStar className="service-list__star-icon" />
                    <span className="service-list__star-number">
                      {service.starNumber}
                    </span>
                    <span className="service-list__sales">
                      ({service.sales})
                    </span>
                  </div>
                  <div className="service-list__price">
                    <p>Starting at ${service.packages[0]?.price}</p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="service-list__no-services">
              No services found for this category.
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default ServiceList;
