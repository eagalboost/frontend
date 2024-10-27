import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import "./SubCategory.css";
import { Link } from "react-router-dom";

const LocalSeo = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(
          "https://eaglesboost.com/api/services?subcategory=Local SEO"
        );
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <section className="sub-category">
      <h2 className="sub-category-title">Local SEO Services</h2>
      <div className="sub-category-services-list">
        {services.length > 0 ? (
          services.map((service) => (
            <Link
              key={service._id}
              to={`/service/${service._id}`}
              className="sub-category-service-card"
            >
              <img
                src={service.coverImage}
                alt={service.shortTitle}
                className="sub-category-service-image"
              />
              <h3 className="sub-category-service-title">
                {service.shortTitle}
              </h3>
              <p className="sub-category-service-desc">{service.shortDesc}</p>
              <div className="sub-category-service-stats">
                <div className="sub-category-service-rating">
                  <FaStar className="star-icon" />
                  <span className="sub-category-star-number">
                    {service.starNumber}
                  </span>
                  <span className="sub-category-sales">({service.sales})</span>
                </div>
                <div className="sub-category-service-price">
                  <p>Starting at ${service.packages[0]?.price}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No Local SEO services found.</p>
        )}
      </div>
    </section>
  );
};

export default LocalSeo;
