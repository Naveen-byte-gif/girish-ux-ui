"use client";

import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Emami East Bengal Football Website",
      category: "WEBSITE DESIGN",
      subtitle: "UI/UX Design",
      image: "/emami-east-bengal.png",
      url: "https://emamieastbengal.com/",
    },
    {
      title: "Parathought Website",
      category: "WEBSITE DESIGN",
      subtitle: "UI/UX Design",
      image: "/parathought.png",
      url: "https://parathought.com/",
    },
    {
      title: "Stride Future Website",
      category: "WEBSITE DESIGN",
      subtitle: "UI/UX Design",
      image: "/stride-future.png",
      url: "https://stridefuture.com/",
    },
    {
      title: "Punjab FC Mobile",
      category: "MOBILE DESIGN",
      subtitle: "UI/UX Design",
      image: "/punjab-fc.png",
      url: "https://rgpunjabfc.com/",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Header Section */}
        <div className="projects-header">
          <div className="projects-label">FEATURED PROJECTS</div>
          <h2 className="projects-title">
            I blend creativity with technical expertise
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {/* First Row - 2 Cards */}
          <div className="row g-4 mb-4">
            {/* Card 1 - Emami East Bengal */}
            <div className="col-12 col-md-6 col-lg-6">
              <a
                href={projects[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-link"
              >
                <div className="project-card">
                  <div className="project-content">
                    <span className="project-category">
                      {projects[0].category}
                    </span>
                    <h3 className="project-title">{projects[0].title}</h3>
                    <p className="project-subtitle">{projects[0].subtitle}</p>
                  </div>
                  <div className="project-image-wrapper">
                    <div className="project-image-container">
                      <img
                        src={projects[0].image}
                        alt={projects[0].title}
                        className="project-image"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      <div
                        className="project-image-placeholder"
                        style={{ display: "none" }}
                      >
                        <i className="bi bi-laptop"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* Card 2 - Parathought */}
            <div className="col-12 col-md-6 col-lg-6">
              <a
                href={projects[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-link"
              >
                <div className="project-card">
                  <div className="project-content">
                    <span className="project-category">
                      {projects[1].category}
                    </span>
                    <h3 className="project-title">{projects[1].title}</h3>
                    <p className="project-subtitle">{projects[1].subtitle}</p>
                  </div>
                  <div className="project-image-wrapper">
                    <div className="project-image-container">
                      <img
                        src={projects[1].image}
                        alt={projects[1].title}
                        className="project-image"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      <div
                        className="project-image-placeholder"
                        style={{ display: "none" }}
                      >
                        <i className="bi bi-laptop"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Second Row - 3 Cards */}
          <div className="row g-4">
            {/* Card 3 - Stride Future */}
            <div className="col-12 col-md-6 col-lg-4">
              <a
                href={projects[2].url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-link"
              >
                <div className="project-card">
                  <div className="project-content">
                    <span className="project-category">
                      {projects[2].category}
                    </span>
                    <h3 className="project-title">{projects[2].title}</h3>
                    <p className="project-subtitle">{projects[2].subtitle}</p>
                  </div>
                  <div className="project-image-wrapper">
                    <div className="project-image-container">
                      <img
                        src={projects[2].image}
                        alt={projects[2].title}
                        className="project-image"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      <div
                        className="project-image-placeholder"
                        style={{ display: "none" }}
                      >
                        <i className="bi bi-laptop"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* Card 4 - Punjab FC Mobile */}
            <div className="col-12 col-md-6 col-lg-4">
              <a
                href={projects[3].url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-link"
              >
                <div className="project-card">
                  <div className="project-content">
                    <span className="project-category">
                      {projects[3].category}
                    </span>
                    <h3 className="project-title">{projects[3].title}</h3>
                    <p className="project-subtitle">{projects[3].subtitle}</p>
                  </div>
                  <div className="project-image-wrapper">
                    <div className="project-image-container">
                      <img
                        src={projects[3].image}
                        alt={projects[3].title}
                        className="project-image"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      <div
                        className="project-image-placeholder"
                        style={{ display: "none" }}
                      >
                        <i className="bi bi-phone"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* Card 5 - CTA Card */}
            <div className="col-12 col-md-12 col-lg-4">
              <div className="project-card project-cta-card">
                <div className="project-cta-content">
                  <span className="project-cta-text">View all projects</span>
                  <div className="project-cta-icon">
                    <i className="bi bi-arrow-up-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
