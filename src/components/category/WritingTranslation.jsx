import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";
import ContentWriting from "../../assets/WritingTranslation/ContentWriting.jpg";
import BookPublishing from "../../assets/WritingTranslation/BookPublishing.jpg";
import Translation from "../../assets/WritingTranslation/Translation.jpg";

const WritingTranslation = () => {
  const services = [
    {
      name: "Content Writing",
      imageUrl: ContentWriting,
      links: [
        { name: "Blog Writing", to: "/writing-translation/blog-writing" },
        { name: "Copywriting", to: "/writing-translation/copywriting" },
        { name: "Website Content", to: "/writing-translation/website-content" },
        { name: "Creative Writing", to: "/writing-translation/creative-writing" },
        { name: "Speach Writing", to: "/writing-translation/speach-writing" },
      ],
    },
    {
      name: "Book & eBook Publishing",
      imageUrl: BookPublishing,
      links: [
        { name: "Book Formatting", to: "/writing-translation/book-formatting" },
        { name: "Book & eBook Writing", to: "/writing-translation/book-ebook-writing" },
        { name: "Beta Reading", to: "/writing-translation/beta-reading" },
        { name: "Proofreading & Editing", to: "/writing-translation/proofreading-editing" },
      ],
    },
    {
      name: "Translation & Transcription",
      imageUrl: Translation,
      links: [
        { name: "Translation", to: "/writing-translation/translation" },
        { name: "Transcription", to: "/writing-translation/transcription" },
        { name: "Localization", to: "/writing-translation/localization" },
      ],
    },
  ];

  return (
    <section className="writing-translation-container">
      <div className="service-category-header">
        <h2>Featured Writing & Translation Services</h2>
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

export default WritingTranslation;
