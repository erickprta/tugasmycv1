import React from "react";
import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      title: "Project 1",
      img: "/public/1 (1).png",
      gLink: "https://github.com/erickprta",
      lLink: "https://www.instagram.com/",
    },
    {
      title: "Project 2",
      img: "/public/2.png",
      gLink: "https://github.com/erickprta",
      lLink: "https://www.instagram.com/",
    },
    {
      title: "Project 3",
      img: "/public/3.png",
      gLink: "https://github.com/erickprta",
      lLink: "https://www.instagram.com/",
    },
    {
      title: "Project 4",
      img: "/public/4.png",
      gLink: "https://github.com/erickprta",
      lLink: "https://www.instagram.com/",
    },
    {
      title: "Project 5",
      img: "/public/5.png",
      gLink: "https://github.com/erickprta",
      lLink: "https://www.instagram.com/",
    },
    {
      title: "Project 6",
      img: "/public/6.png",
      gLink: "https://github.com/erickprta",
      lLink: "https://www.instagram.com/",
    },
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Featured Projects</h3>
          <a
            href="https://github.com/erickprta"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.lLink} target="_blank" rel="noreferrer">
                    <i className="fa fa-globe"></i>
                  </a>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                ea nobis aut deserunt. Reprehenderit numquam harum facilis
                beatae praesentium pariatur eligendi non. Explicabo, cupiditate
                odit vero quo iste numquam obcaecati.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;