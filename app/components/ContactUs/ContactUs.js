"use client";

import React, { useState } from "react";
import "./ContactUs.css";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: "bi-envelope",
      title: "Email",
      content: "girish@example.com",
      link: "mailto:girish@example.com",
    },
    {
      icon: "bi-telephone",
      title: "Phone",
      content: "+1 234 567 8900",
      link: "tel:+12345678900",
    },
    {
      icon: "bi-geo-alt",
      title: "Location",
      content: "Available Worldwide",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Let's work together to bring your ideas to life
          </p>
        </div>

        <div className="row g-5">
          <div className="col-lg-4">
            <div className="contact-info-wrapper">
              <h3 className="contact-info-title">Get in Touch</h3>
              <p className="contact-info-description">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions.
              </p>

              <div className="contact-info-cards">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="contact-info-card"
                  >
                    <div className="contact-info-icon">
                      <i className={`bi ${info.icon}`}></i>
                    </div>
                    <div className="contact-info-content">
                      <h5>{info.title}</h5>
                      <p>{info.content}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="social-links">
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="#" className="social-link" aria-label="Dribbble">
                  <i className="bi bi-dribbble"></i>
                </a>
                <a href="#" className="social-link" aria-label="Behance">
                  <i className="bi bi-behance"></i>
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <i className="bi bi-twitter"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="contact-form-wrapper">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        Your Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Your Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="message" className="form-label">
                        Your Message
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="6"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell me about your project..."
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary-custom">
                      <i className="bi bi-send me-2"></i>
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;

