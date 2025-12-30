"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Navbar.css";

function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`custom-navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="navbar-wrapper">
          {/* Brand Logo - GK Circle */}
          <div className="navbar-brand">
            <Link href="/" className="brand-link" onClick={handleLinkClick}>
              <div className="brand-circle">
                <span className="brand-initials">GK</span>
                <div className="brand-circle-glow"></div>
                <div className="brand-circle-ring"></div>
              </div>
            </Link>
          </div>

          {/* Navbar Content - Center Navigation */}
          <div className={`navbar-collapse ${isOpen ? "show" : ""}`}>
            <div className="navbar-nav">
              {/* Center: Home */}
              <div className="nav-item nav-item-center">
                <Link 
                  href="/" 
                  className={`nav-link ${pathname === "/" ? "active" : ""}`}
                  onClick={handleLinkClick}
                >
                  Home
                </Link>
              </div>

              {/* Center: About & Contact */}
              <div className="nav-item nav-item-center">
                <Link 
                  href="/about" 
                  className={`nav-link ${pathname === "/about" ? "active" : ""}`}
                  onClick={handleLinkClick}
                >
                  About & Contact
                </Link>
              </div>

              {/* Mobile Email */}
              <div className="nav-item nav-item-center nav-email-mobile">
                <a 
                  href="mailto:girishkumar8569@gmail.com" 
                  className="nav-email"
                  onClick={handleLinkClick}
                >
                  Email: girishkumar8569@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Email - Right Side */}
          <div className="navbar-email-wrapper">
            <a 
              href="mailto:girishkumar8569@gmail.com" 
              className="nav-email"
              onClick={handleLinkClick}
            >
              Email: girishkumar8569@gmail.com
            </a>
          </div>

          {/* Responsive Toggle Button */}
          <button
            className={`navbar-toggler ${isOpen ? "active" : ""}`}
            type="button"
            onClick={handleToggle}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            <span className="navbar-toggler-icon">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
