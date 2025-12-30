"use client";

import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          {/* Left Column - Profile Section */}
          <div className="col-12 col-lg-5 col-xl-4">
            <div className="hero-profile-wrapper">
              {/* TOP PROFILE */}
              <div className="hero-profile-container">
                {/* IMAGE WITH DECORATIVE CRESCENTS */}
                <div className="hero-profile-image-wrapper">
                  {/* Yellow Crescent Decorative Shapes */}
                  <div className="hero-crescent-shapes">
                    <div className="hero-crescent hero-crescent-1"></div>
                    <div className="hero-crescent hero-crescent-2"></div>
                    <div className="hero-crescent hero-crescent-3"></div>
                    <div className="hero-crescent hero-crescent-4"></div>
                  </div>
                  
                  {/* Profile Image */}
                  <div className="hero-profile-image">
                    <img
                      src="/profile.jpg"
                      alt="Girish Kumar S"
                      className="hero-profile-img"
                    />
                  </div>
                </div>

                {/* INFO */}
                <div className="hero-profile-info">
                  <h1 className="hero-profile-name">GIRISH KUMAR S</h1>
                  <p className="hero-profile-role">UI/UX Designer</p>
                  <div className="hero-profile-links">
                    <span className="hero-link-icon">in</span>
                    <span className="hero-link-text">Bé</span>
                  </div>
                </div>
              </div>

              {/* BOTTOM DATE */}
              <div className="hero-date-range">
                (2020 - Present)
              </div>
            </div>
          </div>

          {/* Right Column - Main Content */}
          <div className="col-12 col-lg-7 col-xl-8">
            <div className="hero-right d-flex align-items-center justify-content-center h-100">
              <div className="hero-main-content">
                {/* Introduction Text */}
                <div className="hero-intro ">
                  <div className="hero-intro-line d-flex flex-wrap align-items-center">
                    <span className="hero-intro-text">Hi! I&apos;m</span>
                    <span className="hero-name-pill hero-name-pill-yellow">
                      GIRISH S
                    </span>
                  </div>
                  <div className="hero-intro-line d-flex flex-wrap align-items-center">
                    <span className="hero-intro-text">a</span>
                    <span className="hero-name-pill hero-name-pill-dark">
                      UI/UX Designer
                    </span>
                  </div>
                </div>

                {/* Tagline */}
                <h1 className="hero-tagline mb-4">
                  Shaping intuitive digital experience.
                </h1>

                {/* Description */}
                <p className="hero-description mb-0">
                  I&apos;m dedicated to crafting websites that bring your ideas
                  to life, combining design and development to deliver fast,
                  impactful results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
