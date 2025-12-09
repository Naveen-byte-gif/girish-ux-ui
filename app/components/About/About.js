"use client";

import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate UI/UX Designer dedicated to creating meaningful and
            impactful user experiences through thoughtful design.
          </p>
        </div>

        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="about-content">
              <h3 className="about-heading">
                Crafting Digital Experiences with Purpose
              </h3>
              <p className="about-text">
                I am a creative UI/UX designer with a passion for creating
                intuitive and beautiful user interfaces. My approach combines
                user research, design thinking, and modern design principles to
                deliver solutions that not only look great but also provide
                exceptional user experiences.
              </p>
              <p className="about-text">
                With expertise in user-centered design, I work closely with
                clients to understand their needs and translate them into
                engaging digital experiences. I believe in the power of design
                to solve problems and create meaningful connections between
                users and products.
              </p>

              <div className="about-features">
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="feature-card">
                      <div className="feature-icon">
                        <i className="bi bi-palette"></i>
                      </div>
                      <h5>UI Design</h5>
                      <p>Creating visually appealing and modern interfaces</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="feature-card">
                      <div className="feature-icon">
                        <i className="bi bi-people"></i>
                      </div>
                      <h5>UX Research</h5>
                      <p>Understanding user needs and behaviors</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="feature-card">
                      <div className="feature-icon">
                        <i className="bi bi-phone"></i>
                      </div>
                      <h5>Responsive Design</h5>
                      <p>Designing for all devices and screen sizes</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="feature-card">
                      <div className="feature-icon">
                        <i className="bi bi-lightbulb"></i>
                      </div>
                      <h5>Innovation</h5>
                      <p>Bringing fresh ideas and creative solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-image-wrapper">
              <div className="about-image-placeholder">
                <i className="bi bi-person-workspace"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

