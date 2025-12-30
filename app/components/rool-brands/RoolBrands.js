"use client";

import React, { useEffect, useRef } from "react";
import "./RoolBrands.css";

function RoolBrands() {
  const trackRef = useRef(null);
  const animationFrameRef = useRef(null);
  const scrollPositionRef = useRef(0);
  const contentWidthRef = useRef(0);
  const firstContentRef = useRef(null);

  const services = [
    "Landing Pages",
    "E-commerce Website",
    "Web & Mobile Application",
    "Dashboards",
    "Product Redesign",
    "Blogs & Communities",
  ];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let isRunning = true;
    const scrollSpeed = 2; // pixels per frame

    // Calculate content width once and cache it
    const calculateWidth = () => {
      if (firstContentRef.current) {
        contentWidthRef.current = firstContentRef.current.offsetWidth;
      }
    };

    // Get first content element reference
    firstContentRef.current = track.querySelector('.rool-brands-content');
    
    // Initial width calculation
    calculateWidth();

    // Optimized animation function
    const animate = () => {
      if (!isRunning || !track) return;

      const contentWidth = contentWidthRef.current;
      
      // Only proceed if we have a valid width
      if (contentWidth > 0) {
        // Update scroll position
        scrollPositionRef.current += scrollSpeed;

        // Reset position when it reaches the width of one content set (seamless loop)
        if (scrollPositionRef.current >= contentWidth) {
          scrollPositionRef.current = scrollPositionRef.current - contentWidth;
        }

        // Use transform for GPU-accelerated smooth animation
        track.style.transform = `translate3d(-${scrollPositionRef.current}px, 0, 0)`;
      }

      // Continue the animation loop
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Start the continuous animation
    animationFrameRef.current = requestAnimationFrame(animate);

    // Handle window resize - recalculate width
    const handleResize = () => {
      calculateWidth();
    };

    // Use ResizeObserver for better performance than window resize
    let resizeObserver = null;
    if (window.ResizeObserver && firstContentRef.current) {
      resizeObserver = new ResizeObserver(() => {
        calculateWidth();
      });
      resizeObserver.observe(firstContentRef.current);
    } else {
      window.addEventListener('resize', handleResize);
    }

    // Cleanup function - stops animation and removes listeners
    return () => {
      isRunning = false;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (resizeObserver) {
        resizeObserver.disconnect();
      } else {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  return (
    <section className="rool-brands-section py-4">
      <div className="container-fluid px-0">
        <div className="rool-brands-wrapper">
          <div className="rool-brands-inner">
            <div className="rool-brands-container">
              <div 
                ref={trackRef}
                className="rool-brands-track d-flex align-items-center"
              >
                {/* First set of items - used for width calculation */}
                <div className="rool-brands-content d-flex align-items-center">
                  {services.map((service, index) => (
                    <React.Fragment key={`first-${index}`}>
                      <span className="rool-brand-item">{service}</span>
                      <i className="bi bi-star-fill rool-brand-separator"></i>
                    </React.Fragment>
                  ))}
                </div>

                {/* Duplicate set for seamless infinite loop */}
                <div className="rool-brands-content d-flex align-items-center">
                  {services.map((service, index) => (
                    <React.Fragment key={`second-${index}`}>
                      <span className="rool-brand-item">{service}</span>
                      <i className="bi bi-star-fill rool-brand-separator"></i>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoolBrands;
