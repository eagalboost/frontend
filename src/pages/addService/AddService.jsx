import React, { useState } from "react";
import uploadImage from "../../utils/uploadImage";
import axios from "axios";
import "./AddService.css";

const AddService = () => {
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
    packages: [
      { name: "Basic", desc: "", deliveryTime: 1, revisionNumber: 1, price: 0 },
      {
        name: "Standard",
        desc: "",
        deliveryTime: 1,
        revisionNumber: 1,
        price: 0,
      },
      {
        name: "Premium",
        desc: "",
        deliveryTime: 1,
        revisionNumber: 1,
        price: 0,
      },
    ],
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle form field changes
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

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    // Validation for required fields
    if (!formData.shortTitle.trim()) {
      setErrorMessage("Short Title is required.");
      return; // Prevent submission
    }

    try {
      const coverImageUrl = await uploadImage(formData.coverImage[0]);

      const otherImageUrls = [];
      for (let image of formData.otherImages) {
        const imageUrl = await uploadImage(image);
        otherImageUrls.push(imageUrl);
      }

      // Ensure subCategory is sent as subcategory to match backend
      const serviceData = {
        ...formData,
        coverImage: coverImageUrl,
        otherImages: otherImageUrls,
        subcategory: formData.subCategory, // Important: rename to match backend
      };

      console.log("Form Data Before Submission:", serviceData);

      const response = await axios.post(
        "https://eaglesboost.com/api/services",
        serviceData,
        { withCredentials: true }
      );

      setSuccessMessage("Service created successfully!");
      console.log("Service created:", response.data);

      // Reset form
      setFormData({
        title: "",
        category: "",
        subCategory: "",
        coverImage: null,
        otherImages: [],
        desc: "",
        shortTitle: "",
        shortDesc: "",
        features: ["", "", "", ""],
        packages: [
          {
            name: "Basic",
            desc: "",
            deliveryTime: 1,
            revisionNumber: 1,
            price: 0,
          },
          {
            name: "Standard",
            desc: "",
            deliveryTime: 1,
            revisionNumber: 1,
            price: 0,
          },
          {
            name: "Premium",
            desc: "",
            deliveryTime: 1,
            revisionNumber: 1,
            price: 0,
          },
        ],
      });
    } catch (error) {
      console.error("Error creating service:", error);
      setErrorMessage("Error creating service. Please try again.");
    }
  };

  // Subcategory options based on category
  const subCategoryOptions = {
    "programming-tech": [
      "Web Development",
      "Website Maintenance",
      "Wordpress",
      "Shopify",
      "Custom Website",
      "Mobile App Development",
      "Cross-platform Apps",
      "Android App Development",
      "iOS App Development",
      "Mobile App Maintenance",
      "Wix",
      "Webflow",
      "GoDaddy",
      "Squarespace",
      "WooCommerce",
      "Support and IT",
      "Cloud Computing",
      "Cyber Security",
      "Convert Files",
    ],
    "graphics-design": [
      "Logo Design",
      "Brand Style Guides",
      "Business Card and Stationary",
      "Font and Typography",
      "Web Design",
      "App Design",
      "UX Design",
      "Landing Page Design",
      "Icon Design",
      "Illustration",
      "Children Book Illustration",
      "Pattern Design",
      "Cartoon and Comics",
      "Image Editing",
      "Prentation Design",
      "Infographic Design",
      "Resume Design",
      "Packaging and Label Design",
      "Book Design",
      "Book Covers",
      "Album Cover Design",
      "Social Media Design",
      "Thumbnail Design",
      "Email Design",
      "Web Banners",
      "T-shirt and Marchandise",
      "Fashion Design",
      "Jewelry Design",
      "3D Architecture",
      "3D Industrial Design",
      "3D Fashion and Garment",
      "3D Landscape Design",
      "3D Jewelry Design",
    ],
    "digital-marketing": [
      "Search Engine Optimization",
      "Search Engine Marketing",
      "Local SEO",
      "Ecommerce SEO",
      "Video SEO",
      "Social Media Marketing",
      "Paid Social Media",
      "Social Commerce",
      "Influencer Marketing",
      "Community Management",
      "Video Marketing",
      "Ecommerce Marketing",
      "Affiliate Marketing",
      "Display Advertising",
      "Marketing Strategy",
      "Marketing Advice",
      "Web Analytics",
    ],
    "video-animation": [
      "Video Editing",
      "Visual Effect",
      "Intro and Outro Videos",
      "Video Templates Editing",
      "Subtitle and Captions",
      "2D Animation",
      "3D Animation",
      "Character Animation",
      "Whiteboard Animation",
      "Explainer Videos",
      "Animated Logos",
      "Lottie and Web Animation",
      "Text Animation",
      "Motion Tracking",
      "Translations and Effects",
      "Video and Commercials",
      "Social Media Videos",
      "Slideshow Videos",
      "Explainer Video Production",
    ],
    Business: [
      "Marketing Research",
      "Business Plan",
      "Business Consulting",
      "Software Management",
      "Virtual Assistant",
      "Ecommerce Management",
      "Project Management",
      "Sales",
      "Lead Generation",
      "Call Center and Calling",
      "Customer Care",
    ],
    "Writing and Translation": [
      "Blog Writing",
      "Copywriting",
      "Website Content",
      "Creative Writing",
      "Speech Writing",
      "Book Formatting",
      "Book and eBook Writing",
      "Beta Reading",
      "Proofreading and Editing",
      "Translation",
      "Transcription",
      "Localization",
    ],
  };

  return (
    <section className="add-service">
      <div className="add-service-container">
        <h1>Add New Service</h1>
        <form className="add-service-form" onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Service Title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select a Category</option>
            {Object.keys(subCategoryOptions).map((category) => (
              <option key={category} value={category}>
                {category.replace("-", " ")}
              </option>
            ))}
          </select>

          {formData.category && (
            <>
              <label htmlFor="subCategory">Sub Category</label>
              <select
                name="subCategory"
                id="subCategory"
                value={formData.subCategory}
                onChange={handleChange}
                required
              >
                <option value="">Select a Subcategory</option>
                {subCategoryOptions[formData.category]?.map(
                  (subCategory, index) => (
                    <option key={index} value={subCategory}>
                      {subCategory}
                    </option>
                  )
                )}
              </select>
            </>
          )}

          <label htmlFor="coverImage">Cover Image</label>
          <input
            type="file"
            id="coverImage"
            name="coverImage"
            onChange={handleChange}
            required
          />

          <label htmlFor="otherImages">Upload Other Images</label>
          <input
            type="file"
            id="otherImages"
            name="otherImages"
            multiple
            onChange={handleChange}
          />

          <label htmlFor="desc">Description</label>
          <textarea
            id="desc"
            name="desc"
            placeholder="Explain your details"
            value={formData.desc}
            onChange={handleChange}
            required
          ></textarea>

          <label htmlFor="shortTitle">Short Title</label>
          <input
            type="text"
            id="shortTitle"
            name="shortTitle"
            placeholder="Short Title"
            value={formData.shortTitle}
            onChange={handleChange}
            required
          />

          <label htmlFor="shortDesc">Short Description</label>
          <textarea
            id="shortDesc"
            name="shortDesc"
            placeholder="Enter your short description"
            value={formData.shortDesc}
            onChange={handleChange}
            required
          ></textarea>

          <label>Add Features</label>
          {formData.features.map((feature, index) => (
            <input
              key={index}
              type="text"
              value={feature}
              placeholder={`Feature ${index + 1}`}
              onChange={(e) => handleFeatureChange(index, e.target.value)}
            />
          ))}

          <label>Packages</label>
          {formData.packages.map((pkg, index) => (
            <div key={pkg.name}>
              <h3>{pkg.name} Package</h3>
              <label>Description</label>
              <textarea
                value={pkg.desc}
                onChange={(e) =>
                  handlePackageChange(index, "desc", e.target.value)
                }
                placeholder={`${pkg.name} package description`}
              />
              <label>Delivery Time (days)</label>
              <input
                type="number"
                value={pkg.deliveryTime}
                onChange={(e) =>
                  handlePackageChange(index, "deliveryTime", e.target.value)
                }
              />
              <label>Revisions</label>
              <input
                type="number"
                value={pkg.revisionNumber}
                onChange={(e) =>
                  handlePackageChange(index, "revisionNumber", e.target.value)
                }
              />
              <label>Price</label>
              <input
                type="number"
                value={pkg.price}
                onChange={(e) =>
                  handlePackageChange(index, "price", e.target.value)
                }
              />
            </div>
          ))}

          <button className="add-service-btn" type="submit">
            Create Service
          </button>

          {successMessage && (
            <div className="success-message">{successMessage}</div>
          )}
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </form>
      </div>
    </section>
  );
};

export default AddService;
