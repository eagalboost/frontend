import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";
import LogoBrand from "../../assets/GraphicsDesign/LogoBrand.jpg";
import WebAppDesign from "../../assets/GraphicsDesign/WebAppDesign.jpg";
import ArtIllustration from "../../assets/GraphicsDesign/ArtIllustration.jpg";
import VisualDesign from "../../assets/GraphicsDesign/VisualDesign.jpg";
import CoverPackageDesign from "../../assets/GraphicsDesign/CoverPackageDesign.jpg";
import MarketingDesign from "../../assets/GraphicsDesign/MarketingDesign.jpg";
import FashionDesign from "../../assets/GraphicsDesign/FashionDesign.jpg";
import Design3d from "../../assets/GraphicsDesign/Design3d.jpg"

const GraphicsDesign = () => {
  const services = [
    {
      name: "Logo & Brand Identity",
      imageUrl: LogoBrand,
      links: [
        { name: "Logo Design", to: "/graphics-design/logo-design" },
        { name: "Brand Style Guides", to: "/graphics-design/brand-style-guides" },
        {
          name: "Business Cards & Stationary",
          to: "/graphics-design/business-card-stationary",
        },
        { name: "Fonts & Typography", to: "/graphics-design/font-typography" },
      ],
    },
    {
      name: "Web & App Design",
      imageUrl: WebAppDesign,
      links: [
        { name: "Web Design", to: "/graphics-design/web-design" },
        { name: "App Design", to: "/graphics-design/app-design" },
        { name: "UX Design", to: "/graphics-design/ux-design" },
        { name: "Landing Page Design", to: "/graphics-design/landing-page-design" },
        { name: "Icon Design", to: "/graphics-design/icon-design" },
      ],
    },
    {
      name: "Art & Illustration",
      imageUrl: ArtIllustration,
      links: [
        { name: "Illustration", to: "/graphics-design/illustration" },
        {
          name: "Children's Book Illustration",
          to: "/graphics-design/children-book-illustration",
        },
        { name: "Pattern Design", to: "/graphics-design/pattern-design" },
        { name: "Cartoon & Comics", to: "/graphics-design/cartoon-comics" },
      ],
    },
    {
      name: "Visual Design",
      imageUrl: VisualDesign,
      links: [
        { name: "Image Editing", to: "/graphics-design/image-editing" },
        { name: "Presentation Design", to: "/graphics-design/presentation-design" },
        { name: "Infographic Design", to: "/graphics-design/infographic-design" },
        { name: "Resume Design", to: "/graphics-design/resume-design" },
      ],
    },
    {
      name: "Cover & Package Design",
      imageUrl: CoverPackageDesign,
      links: [
        { name: "Packaging & Label Design", to: "/graphics-design/packaging-label-design" },
        { name: "Book Design", to: "/graphics-design/book-design" },
        { name: "Book Covers", to: "/graphics-design/book-covers" },
        { name: "Album Cover Design", to: "/graphics-design/album-cover-design" },
      ],
    },
    {
      name: "Marketing Design",
      imageUrl: MarketingDesign,
      links: [
        { name: "Social Media Design", to: "/graphics-design/social-media-design" },
        { name: "Thumbnail Design", to: "/graphics-design/thumbnail-design" },
        { name: "Email Design", to: "/graphics-design/email-design" },
        { name: "Web Banners", to: "/graphics-design/web-banners" },
      ],
    },
    {
      name: "Fashion & Merchandise",
      imageUrl: FashionDesign,
      links: [
        { name: "T-Shirt & Marchandise", to: "/graphics-design/tshirt-marchandise" },
        { name: "Fashion Design", to: "/graphics-design/fashion-design" },
        { name: "Jewelry Design", to: "/graphics-design/jewelry-design" },
      ],
    },
    {
      name: "3D Design",
      imageUrl: Design3d,
      links: [
        { name: "3D Architecture", to: "/graphics-design/3d-architecture-design" },
        { name: "3D Industrial Design", to: "/graphics-design/3d-industrial-design" },
        { name: "3D Fashion & Garment", to: "/graphics-design/3d-fashion-design" },
        { name: "3D Landscape Design", to: "/graphics-design/3d-landscape-design" },
        { name: "3D Jewelry Design", to: "/graphics-design/3d-jewelry-design" },
      ],
    },
  ];

  return (
    <section className="graphics-design-container">
      <div className="service-category-header">
        <h2>Featured Graphics & Design</h2>
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

export default GraphicsDesign;
