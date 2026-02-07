"use client";

import React from "react";
import "./Footer.css";

function Footer() {
  const handleDownloadResume = () => {
    // You can update this to link to actual resume file
    console.log("Download resume clicked");
  };

  return (
    <footer className="footer-section">
      {/* Main Content Section */}
      <div className="footer-main-content">
        <div className="container">
          <div className="row">
            {/* Left Side */}
            <div className="col-12 col-lg-6">
              <div className="footer-left-section">
                {/* Seeking Opportunities Badge */}
                <div className="footer-opportunity-badge">
                  <span className="footer-yellow-dot"></span>
                  <span className="footer-opportunity-text">Seeking full-time opportunities</span>
                </div>

                {/* Main Headline */}
                <h1 className="footer-main-headline">
                  Designing the
                  <br />
                  next generation of
                  <br />
                  digital experiences.
                </h1>

                {/* Sub-headline */}
                <p className="footer-sub-headline">Research. Design. Deliver.</p>

                {/* Download Resume Button */}
                <button 
                  className="footer-resume-btn"
                  onClick={handleDownloadResume}
                >
                  DOWNLOAD RESUME
                </button>
              </div>
            </div>

            {/* Right Side */}
            <div className="col-12 col-lg-6">
              <div className="footer-right-section">
                {/* Profile Card */}
                <div className="footer-profile-card">
                  <div className="footer-profile-image-wrapper">
                    <img
                      src="/about_image.png"
                      alt="Girish Kumar S"
                      className="footer-profile-image"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  </div>
                  <div className="footer-profile-info">
                    <h2 className="footer-profile-name">GIRISH KUMAR S</h2>
                    <p className="footer-profile-title">UI/UX Designer</p>
                    <div className="footer-profile-links">
                      <a
                        href="https://www.linkedin.com/in/girish-ux/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                        aria-label="LinkedIn"
                      >
                        LinkedIn
                      </a>
                      <a
                        href="https://www.behance.net/girishkumar8569"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                        aria-label="Behance"
                      >
                        Behance
                      </a>
                    </div>
                  </div>
                </div>

                {/* Contact Section */}
                <div className="footer-contact-section">
                  <h3 className="footer-contact-heading">Contact me</h3>
                  <a 
                    href="mailto:girishkumar8569@gmail.com" 
                    className="footer-email-link"
                  >
                    girishkumar8569@gmail.com
                  </a>
                </div>

                {/* Professional Summary */}
                <p className="footer-summary">
                  Reach out if you&apos;re looking for a reliable{" "}
                  <span className="footer-summary-highlight">UI/UX Designer</span>{" "}
                  who can turn ideas into intuitive digital experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="footer-bottom-section">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Column - Copyright and Built Info */}
            <div className="col-12 col-md-6">
              <div className="footer-bottom-left">
                <p className="footer-copyright">
                  Copyright © 2026 Girish Kumar · UI/UX Design
                </p>
                <div className="footer-built-info">
                  <svg
                    className="footer-framer-icon"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M7 0L0 3.5V7L7 10.5L14 7V3.5L7 0Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="footer-built-text">Built in Framer</span>
                </div>
              </div>
            </div>

            {/* Right Column - Designed By */}
            <div className="col-12 col-md-6">
              <div className="footer-bottom-right">
                <span className="footer-designed-text">Designed by</span>
                <svg
                  className="footer-designer-icon"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <circle cx="7" cy="5" r="2.5" fill="currentColor" />
                  <path
                    d="M2.5 12C2.5 9.5 4.5 8 7 8C9.5 8 11.5 9.5 11.5 12"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="footer-designer-name">Girish S</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
