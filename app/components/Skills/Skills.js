"use client";

import React, { useEffect, useRef, useState } from "react";
import "./Skills.css";

function Skills() {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);

  const designTools = [
    {
      name: "Figma",
      description: "Leading collaborative design tool",
      logo: "figma",
    },
    {
      name: "Adobe Photoshop",
      description: "Raster graphics editor by Adobe",
      logo: "photoshop",
    },
    {
      name: "Sketch",
      description: "Vector graphics editor for Mac",
      logo: "sketch",
    },
    {
      name: "Adobe Illustrator",
      description: "Vector graphics editor by Adobe",
      logo: "illustrator",
    },
    {
      name: "Adobe XD",
      description: "UI/UX design and prototyping tool",
      logo: "xd",
    },
    {
      name: "InVision",
      description: "Digital product design platform",
      logo: "invision",
    },
  ];

  useEffect(() => {
    const observers = [];

    cardRefs.current.forEach((cardRef, index) => {
      if (!cardRef) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => new Set([...prev, index]));
              // Unobserve after animation triggers to prevent re-triggering
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.15,
          rootMargin: "0px 0px -30px 0px",
        }
      );

      observer.observe(cardRef);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [designTools.length]);

  return (
    <section id="skills" className="design-toolkit-section">
      <div className="container">
        <div className="design-toolkit-wrapper">
          <div className="design-toolkit-header">
            <p className="design-toolkit-label">TOOLS & SKILLS</p>
            <h3 className="design-toolkit-title">My Design Toolkit</h3>
          </div>
          <div className="design-toolkit-list">
            {designTools.map((tool, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`tool-card ${visibleCards.has(index) ? "tool-card-visible" : ""}`}
                style={{
                  animationDelay: `${index * 0.15}s`,
                }}
              >
                <div className={`tool-logo tool-logo-${tool.logo}`}>
                  {tool.logo === "figma" && (
                    <div className="figma-logo">
                      <div className="figma-shape figma-shape-1"></div>
                      <div className="figma-shape figma-shape-2"></div>
                      <div className="figma-shape figma-shape-3"></div>
                      <div className="figma-shape figma-shape-4"></div>
                    </div>
                  )}
                  {tool.logo === "photoshop" && <span className="tool-icon-text">Ps</span>}
                  {tool.logo === "sketch" && <div className="sketch-logo"></div>}
                  {tool.logo === "illustrator" && <span className="tool-icon-text">Ai</span>}
                  {tool.logo === "xd" && <span className="tool-icon-text">Xd</span>}
                  {tool.logo === "invision" && <span className="tool-icon-text">in</span>}
                </div>
                <div className="tool-info">
                  <h4 className="tool-name">{tool.name}</h4>
                  <p className="tool-description">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

