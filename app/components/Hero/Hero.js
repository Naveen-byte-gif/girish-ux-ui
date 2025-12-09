"use client";

import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6 text-center text-lg-start mb-5 mb-lg-0">
            <div className="hero-content">
              <h1 className="hero-title">
                Hi, I'm <span className="gradient-text">Girish</span>
              </h1>
              <h2 className="hero-subtitle">UI/UX Designer</h2>
              <p className="hero-description">
                I create beautiful, intuitive, and user-centered designs that
                solve real problems and deliver exceptional user experiences.
                Transforming ideas into engaging digital experiences.
              </p>
              <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary-custom me-3 mb-3 mb-md-0">
                  <i className="bi bi-briefcase me-2"></i>
                  View Projects
                </a>
                <a href="#contact" className="btn btn-outline-custom">
                  <i className="bi bi-envelope me-2"></i>
                  Contact Me
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <div className="hero-image-wrapper">
              <div className="hero-image-placeholder">
                <i className="bi bi-person-circle"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

