"use client";

import React from "react";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: "bi-linkedin", href: "#", label: "LinkedIn" },
    { icon: "bi-dribbble", href: "#", label: "Dribbble" },
    { icon: "bi-behance", href: "#", label: "Behance" },
    { icon: "bi-twitter", href: "#", label: "Twitter" },
    { icon: "bi-instagram", href: "#", label: "Instagram" },
  ];

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row g-4 mb-5">
          <div className="col-md-6 col-lg-4">
            <div className="footer-brand">
              <h3 className="footer-brand-name">Girish</h3>
              <p className="footer-brand-subtitle">UI/UX Designer</p>
              <p className="footer-description">
                Creating beautiful and intuitive user experiences through
                thoughtful design and innovation.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-2">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-6 col-lg-3">
            <h5 className="footer-title">Services</h5>
            <ul className="footer-links">
              <li>UI Design</li>
              <li>UX Research</li>
              <li>Prototyping</li>
              <li>Design Systems</li>
              <li>Consulting</li>
            </ul>
          </div>

          <div className="col-md-6 col-lg-3">
            <h5 className="footer-title">Connect</h5>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="footer-social-link"
                  aria-label={social.label}
                >
                  <i className={`bi ${social.icon}`}></i>
                </a>
              ))}
            </div>
            <div className="footer-contact mt-3">
              <p>
                <i className="bi bi-envelope me-2"></i>
                girish@example.com
              </p>
              <p>
                <i className="bi bi-telephone me-2"></i>
                +1 234 567 8900
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="footer-copyright">
                &copy; {currentYear} Girish. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="footer-made">
                Made with <i className="bi bi-heart-fill text-danger"></i> by
                Girish
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

