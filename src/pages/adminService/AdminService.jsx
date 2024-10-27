import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminService.css";
import { useNavigate } from "react-router-dom";

const AdminServices = () => {
  const [services, setServices] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const categories = [
    "All",
    "programming-tech",
    "graphics-design",
    "digital-marketing",
    "video-animation",
    "business",
    "writing-translation",
  ];

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`https://eaglesboost.com/api/services`, {
          params: {
            category: selectedCategory !== "All" ? selectedCategory : null,
          },
        });
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services", error);
      }
    };

    fetchServices();
  }, [selectedCategory]);

  // Handle category change
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Handle edit and delete (dummy handlers for now)
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/edit-service/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `https://eaglesboost.com/api/services/${id}`,
        { withCredentials: true } 
      );
      console.log(response.data);

      setServices(services.filter((service) => service._id !== id));
    } catch (error) {
      console.error("Error deleting service:", error);
    }
  };

  return (
    <div className="admin-service-container">
      <h1 className="admin-service-title">Manage Services</h1>

      <div className="admin-service-filter">
        <label htmlFor="category">Filter by Category: </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <table className="admin-service-table">
        <thead>
          <tr>
            <th>Service ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.length > 0 ? (
            services.map((service) => (
              <tr key={service._id}>
                <td>{service._id}</td>
                <td>{service.title}</td>
                <td>{service.category}</td>
                <td>
                  {service.packages && service.packages.length > 0
                    ? `$${service.packages[0].price}`
                    : "N/A"}
                </td>
                <td className="admin-service-actions">
                  <button
                    className="edit-button"
                    onClick={() => handleEdit(service._id)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(service._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No services found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminServices;
