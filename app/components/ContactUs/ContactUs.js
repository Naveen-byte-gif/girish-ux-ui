"use client";

import React from "react";
import "./ContactUs.css";

function ContactUs() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-label">CONTACT ME</h2>
          <h1 className="contact-title">You can find me online</h1>
        </div>

        <div className="contact-cards">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-card linkedin-card">
            <div className="card-content">
              <span className="card-label">Linked in</span>
              <div className="card-icon linkedin-icon">
                <span className="icon-text">in</span>
              </div>
            </div>
          </a>

          <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="contact-card behance-card">
            <div className="card-content">
              <span className="card-label">Behance</span>
              <div className="card-icon behance-icon">
                <span className="icon-text">Bē</span>
              </div>
            </div>
          </a>

          <a href="#contact" className="contact-card get-in-touch-card">
            <div className="card-content">
              <span className="card-label">Get in touch</span>
              <div className="card-icon arrow-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;

