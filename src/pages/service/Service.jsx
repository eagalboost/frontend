import React, { useEffect, useState } from "react";
import "./Service.css";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Service = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchServiceDetail = async () => {
      try {
        const response = await axios.get(
          `https://eaglesboost.com/api/services/single-service/${id}`,
          { withCredentials: true }
        );
        setService(response.data);
      } catch (error) {
        console.error("Error fetching service detail:", error);
        setError("Could not fetch service details.");
      }
    };
    fetchServiceDetail();
  }, [id]);

  const handleOrder = async (packageType) => {
    const selectedPackage = service.packages.find(
      (pkg) => pkg.name === packageType
    );
    const price = selectedPackage ? selectedPackage.price : null;
    console.log("Selected Package:", selectedPackage);
    if (price === null) {
      setError("Selected package is not valid.");
      return;
    }

    try {
      const newOrder = {
        packageType,
        price,
      };

      const response = await axios.post(
        `http://localhost:8800/api/orders/${id}`,
        newOrder,
        {
          withCredentials: true,
        }
      );

      console.log("Order placed successfully:", response.data);
      navigate("/order-confirmation");
    } catch (error) {
      console.error("Error placing order:", error);
      setError("Failed to place the order. Please try again.");
    }
  };

  if (!service) return <p>Loading...</p>;

  const packages = service.packages || [];
  const hasPackages = packages.length === 3;

  return (
    <section className="service-page">
      <div className="service-left">
        <h1 className="service-title">{service.title}</h1>
        <Swiper spaceBetween={30} pagination={{ clickable: true }} navigation>
          <SwiperSlide>
            <img
              src={service.coverImage}
              alt={service.shortTitle}
              className="service-detail-image"
            />
          </SwiperSlide>
          {service.otherImages &&
            service.otherImages.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`Service image ${index + 1}`}
                  className="service-detail-image"
                />
              </SwiperSlide>
            ))}
        </Swiper>
        <h2 className="service-subtitle">About This Service</h2>
        <p className="service-description">{service.desc}</p>
      </div>

      {hasPackages && (
        <div className="service-right">
          <div className="packages-tabs">
            <input
              id="package-tab-1"
              name="package-tab-group"
              type="radio"
              defaultChecked
            />
            <input id="package-tab-2" name="package-tab-group" type="radio" />
            <input id="package-tab-3" name="package-tab-group" type="radio" />
            <div className="nav-container">
              <label htmlFor="package-tab-1" className="package-tab">
                Basic
              </label>
              <label htmlFor="package-tab-2" className="package-tab">
                Standard
              </label>
              <label htmlFor="package-tab-3" className="package-tab">
                Premium
              </label>
            </div>
            <div className="package-content">
              <div className="package-tab-content">
                <h3 className="price-wrapper">${packages[0].price}</h3>
                <p>Delivery Time: {packages[0].deliveryTime} day(s)</p>
                <p>{packages[0].desc || "No description available."}</p>
                <button
                  className="order-now-button"
                  onClick={() => handleOrder("Basic")}
                >
                  Order Now
                </button>
                <button className="contact-button">Contact Seller</button>
              </div>
              <div className="package-tab-content">
                <h3 className="price-wrapper">${packages[1].price}</h3>
                <p>Delivery Time: {packages[1].deliveryTime} day(s)</p>
                <p>{packages[1].desc || "No description available."}</p>
                <button
                  className="order-now-button"
                  onClick={() => handleOrder("Standard")}
                >
                  Order Now
                </button>
                <button className="contact-button">Contact Seller</button>
              </div>
              <div className="package-tab-content">
                <h3 className="price-wrapper">${packages[2].price}</h3>
                <p>Delivery Time: {packages[2].deliveryTime} day(s)</p>
                <p>{packages[2].desc || "No description available."}</p>
                <button
                  className="order-now-button"
                  onClick={() => handleOrder("Premium")}
                >
                  Order Now
                </button>
                <button className="contact-button">Contact Seller</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {error && <p className="error-message">{error}</p>}
    </section>
  );
};

export default Service;
