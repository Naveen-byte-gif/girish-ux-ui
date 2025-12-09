"use client";

import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "E-Commerce Mobile App",
      category: "Mobile UI/UX",
      description: "Modern and intuitive e-commerce mobile application design with seamless shopping experience",
      image: "bi-phone",
      tags: ["Figma", "Prototyping", "Mobile Design"],
    },
    {
      title: "Healthcare Dashboard",
      category: "Web Design",
      description: "Comprehensive healthcare management dashboard with clean and accessible interface",
      image: "bi-laptop",
      tags: ["Adobe XD", "Dashboard", "Web Design"],
    },
    {
      title: "Food Delivery App",
      category: "Mobile UI/UX",
      description: "User-friendly food delivery app with smooth ordering and tracking experience",
      image: "bi-phone",
      tags: ["Figma", "Mobile", "UX Research"],
    },
    {
      title: "Finance Management App",
      category: "Mobile UI/UX",
      description: "Intuitive finance tracking application with beautiful data visualization",
      image: "bi-phone",
      tags: ["Sketch", "Prototyping", "Mobile Design"],
    },
    {
      title: "Corporate Website",
      category: "Web Design",
      description: "Professional corporate website with modern design and excellent user experience",
      image: "bi-laptop",
      tags: ["Figma", "Web Design", "Responsive"],
    },
    {
      title: "Fitness App Design",
      category: "Mobile UI/UX",
      description: "Motivational fitness app with engaging interface and workout tracking features",
      image: "bi-phone",
      tags: ["Adobe XD", "Mobile", "UI Design"],
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent design work and creative solutions
          </p>
        </div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="project-card">
                <div className="project-image">
                  <div className="project-image-placeholder">
                    <i className={`bi ${project.image}`}></i>
                  </div>
                  <div className="project-overlay">
                    <a href="#" className="project-link">
                      <i className="bi bi-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
                <div className="project-content">
                  <span className="project-category">{project.category}</span>
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

