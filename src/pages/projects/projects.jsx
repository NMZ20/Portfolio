import React, { Component } from "react";
import Project from "../../components/project/project";
import "./projects.css";

class Projects extends Component {
  render() {
    return (
      <div className="projects-container">
        <div className="title">Projects</div>
        <Project
          projectName="Portfolio Website"
          href="https://github.com/NMZ20/Portfolio"
        />
        <Project
          projectName="Multiple-Choice Quiz"
          href="https://github.com/NMZ20/Multible-Choice-Quiz"
        />
      </div>
    );
  }
}

export default Projects;
