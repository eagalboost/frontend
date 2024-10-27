import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'; 
import axios from "axios";
import uploadImage from "../../utils/uploadImage";
import "./EditService.css";
const EditService = () => {
  const { id: serviceId } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    subCategory: "",
    coverImage: null,
    otherImages: [],
    desc: "",
    shortTitle: "",
    shortDesc: "",
    features: ["", "", "", ""],
    packages: [], 
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const fetchService = async () => {
      if (!serviceId) {
        setErrorMessage("No service ID provided");
        return;
      }

      try {
        const { data } = await axios.get(
          `https://eaglesboost.com/api/services/single-service/${serviceId}`
        );
        setFormData({
          title: data.title,
          category: data.category,
          subCategory: data.subcategory,
          desc: data.desc,
          shortTitle: data.shortTitle,
          shortDesc: data.shortDesc,
          features: data.features || ["", "", "", ""],
          packages: data.packages || [], 
          coverImage: data.coverImage || null,
          otherImages: data.otherImages || [],
        });
      } catch (error) {
        console.error("Error fetching service:", error);
        setErrorMessage("Error fetching service details.");
      }
    };

    fetchService();
  }, [serviceId]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handlePackageChange = (index, field, value) => {
    const updatedPackages = [...formData.packages];
    updatedPackages[index][field] = value;
    setFormData((prev) => ({ ...prev, packages: updatedPackages }));
  };

  const handleFeatureChange = (index, value) => {
    const updatedFeatures = [...formData.features];
    updatedFeatures[index] = value;
    setFormData((prev) => ({ ...prev, features: updatedFeatures }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    try {
      let coverImageUrl = formData.coverImage;
      let otherImageUrls = formData.otherImages;

      if (formData.coverImage && typeof formData.coverImage === "object") {
        coverImageUrl = await uploadImage(formData.coverImage[0]);
      }

      if (formData.otherImages && typeof formData.otherImages[0] === "object") {
        otherImageUrls = [];
        for (let image of formData.otherImages) {
          const imageUrl = await uploadImage(image);
          otherImageUrls.push(imageUrl);
        }
      }

      const updatedServiceData = {
        ...formData,
        coverImage: coverImageUrl,
        otherImages: otherImageUrls,
        subcategory: formData.subCategory,
      };

      await axios.put(
        `https://eaglesboost.com/api/services/${serviceId}`,
        updatedServiceData,
        { withCredentials: true }
      );

      setSuccessMessage("Service updated successfully!");
    } catch (error) {
      console.error("Error updating service:", error);
      setErrorMessage("Error updating service. Please try again.");
    }
  };

  return (
    <section className="edit-service">
      <div className="edit-service-container">
        <h1 className="edit-service-title">Edit Service</h1>
        <form className="edit-service-form" onSubmit={handleSubmit}>
          <label className="edit-service-label" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="edit-service-input"
            placeholder="Service Title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <label className="edit-service-label" htmlFor="category">
            Category
          </label>
          <select
            name="category"
            id="category"
            className="edit-service-select"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select a Category</option>
            <option value="programming-tech">Programming & Tech</option>
            <option value="graphics-design">Graphics & Design</option>
            <option value="digital-marketing">Digital Marketing</option>
          </select>

          {formData.category && (
            <>
              <label className="edit-service-label" htmlFor="subCategory">
                Sub Category
              </label>
              <select
                name="subCategory"
                id="subCategory"
                className="edit-service-select"
                value={formData.subCategory}
                onChange={handleChange}
                required
              >
                <option value="">Select a Subcategory</option>
                {formData.category === "programming-tech" && (
                  <>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile Apps">Mobile Apps</option>
                  </>
                )}
                {formData.category === "graphics-design" && (
                  <>
                    <option value="Logo Design">Logo Design</option>
                    <option value="Branding">Branding</option>
                  </>
                )}
              </select>
            </>
          )}

          <label className="edit-service-label" htmlFor="coverImage">
            Cover Image
          </label>
          <input
            type="file"
            id="coverImage"
            name="coverImage"
            className="edit-service-input"
            onChange={handleChange}
          />

          <label className="edit-service-label" htmlFor="otherImages">
            Upload Other Images
          </label>
          <input
            type="file"
            id="otherImages"
            name="otherImages"
            className="edit-service-input"
            multiple
            onChange={handleChange}
          />

          <label className="edit-service-label" htmlFor="desc">
            Description
          </label>
          <textarea
            id="desc"
            name="desc"
            className="edit-service-textarea"
            placeholder="Explain your details"
            value={formData.desc}
            onChange={handleChange}
            required
          ></textarea>

          <label className="edit-service-label" htmlFor="shortTitle">
            Short Title
          </label>
          <input
            type="text"
            id="shortTitle"
            name="shortTitle"
            className="edit-service-input"
            placeholder="Short Title"
            value={formData.shortTitle}
            onChange={handleChange}
            required
          />

          <label className="edit-service-label" htmlFor="shortDesc">
            Short Description
          </label>
          <textarea
            id="shortDesc"
            name="shortDesc"
            className="edit-service-textarea"
            placeholder="Enter your short description"
            value={formData.shortDesc}
            onChange={handleChange}
            required
          ></textarea>

          <label className="edit-service-label">Add Features</label>
          {formData.features.map((feature, index) => (
            <input
              key={index}
              type="text"
              className="edit-service-input"
              value={feature}
              placeholder={`Feature ${index + 1}`}
              onChange={(e) => handleFeatureChange(index, e.target.value)}
            />
          ))}

          <label className="edit-service-label">Packages</label>
          {formData.packages.map((pkg, index) => (
            <div key={index} className="edit-service-package">
              <h3 className="edit-service-package-title">{pkg.name} Package</h3>
              <label className="edit-service-label">Description</label>
              <textarea
                className="edit-service-textarea"
                value={pkg.desc}
                onChange={(e) =>
                  handlePackageChange(index, "desc", e.target.value)
                }
                placeholder={`${pkg.name} package description`}
              />
              <label className="edit-service-label">Delivery Time (days)</label>
              <input
                type="number"
                className="edit-service-input"
                value={pkg.deliveryTime}
                onChange={(e) =>
                  handlePackageChange(index, "deliveryTime", e.target.value)
                }
              />
              <label className="edit-service-label">Revision Number</label>
              <input
                type="number"
                className="edit-service-input"
                value={pkg.revisionNumber}
                onChange={(e) =>
                  handlePackageChange(index, "revisionNumber", e.target.value)
                }
              />
              <label className="edit-service-label">Price</label>
              <input
                type="number"
                className="edit-service-input"
                value={pkg.price}
                onChange={(e) =>
                  handlePackageChange(index, "price", e.target.value)
                }
              />
            </div>
          ))}

          <button type="submit" className="edit-service-submit">
            Update Service
          </button>
        </form>

        {errorMessage && <p className="error">{errorMessage}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
      </div>
    </section>
  );
};

export default EditService;
