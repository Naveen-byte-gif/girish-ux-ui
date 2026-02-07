"use client";

import React, { useState } from "react";
import "./About.css";

function About() {
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
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Featured Projects Label */}
        <div className="featured-label">FEATURED PROJECTS</div>

        {/* About Me Heading */}
        <h1 className="about-main-title">About Me</h1>

        <div className="about-content-wrapper">
          {/* Left Section - Profile Card */}
          <div className="about-left">
            <div className="profile-card">
              {/* Yellow Bars */}
              <div className="yellow-bars">
                <div className="bar bar-1"></div>
                <div className="bar bar-2"></div>
                <div className="bar bar-3"></div>
              </div>

              {/* Profile Image - from public/about_image.png */}
              <div className="profile-image">
                <img 
                  src="/about_image.png" 
                  alt="Girish Kumar S" 
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="profile-placeholder" style={{display: 'none'}}>
                  <span>GK</span>
                </div>
              </div>

              {/* Profile Info */}
              <div className="profile-info">
                <h2 className="profile-name">GIRISH KUMAR S</h2>
                <p className="profile-role">UI/UX Designer</p>
                <p className="profile-status">I'm OK</p>
              </div>
            </div>
          </div>

          {/* Right Section - Biography */}
          <div className="about-right">
            <div className="biography">
              <p className="bio-paragraph">
                Hi, I'm Girish Kumar, a UI/UX Designer focused on creating clear, user-centric digital experiences. I enjoy turning complex ideas into intuitive, well-structured interfaces that feel simple, purposeful, and easy to use.
              </p>
              <p className="bio-paragraph">
                My approach is rooted in understanding user needs, business goals, and usability principles to design solutions that balance aesthetics with functionality. I focus on crafting interfaces that are not only visually refined but also logical, accessible, and scalable.
              </p>
              <p className="bio-paragraph">
                I've worked on a variety of digital products, collaborating with cross-functional teams to deliver meaningful outcomes. Whether it's designing a new experience or improving an existing one, my goal is always to create thoughtful designs that solve real problems.
              </p>
              <p className="bio-paragraph">
                Open to full-time opportunities—let's build impactful digital experiences together.
              </p>
            </div>

            {/* Contact Form */}
            <div className="contact-form-card">
              <h3 className="contact-form-title">Let's get in touch</h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <input
                  type="text"
                  name="name"
                  placeholder="Name."
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email."
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Leave me a message."
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  rows="4"
                  required
                ></textarea>
                <button type="submit" className="submit-button">
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
