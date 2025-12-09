"use client";

import React from "react";
import "./Skills.css";

function Skills() {
  const skills = [
    {
      title: "UI Design",
      icon: "bi-palette",
      description: "Creating visually appealing and modern user interfaces",
      items: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator"],
    },
    {
      title: "UX Research",
      icon: "bi-clipboard-data",
      description: "Understanding user needs through research and analysis",
      items: ["User Interviews", "Personas", "User Journey", "Wireframing", "Prototyping"],
    },
    {
      title: "Prototyping",
      icon: "bi-layers",
      description: "Building interactive prototypes for testing and validation",
      items: ["Figma Prototypes", "InVision", "Principle", "Framer", "Axure"],
    },
    {
      title: "Design Systems",
      icon: "bi-grid-3x3",
      description: "Creating consistent and scalable design systems",
      items: ["Component Libraries", "Style Guides", "Design Tokens", "Documentation"],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            A comprehensive set of design skills to bring your vision to life
          </p>
        </div>

        <div className="row g-4">
          {skills.map((skill, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="skill-card">
                <div className="skill-icon-wrapper">
                  <i className={`bi ${skill.icon}`}></i>
                </div>
                <h4 className="skill-title">{skill.title}</h4>
                <p className="skill-description">{skill.description}</p>
                <div className="skill-items">
                  {skill.items.map((item, itemIndex) => (
                    <span key={itemIndex} className="skill-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

