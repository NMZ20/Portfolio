import React, { Component } from "react";
import Project from "../../components/project/project";
import "./projects.css";

class Projects extends Component {
  render() {
    return (
      <div className="projects-container">
        <Project
          projectName="Soon"
          href=""
        />
      </div>
    );
  }
}

export default Projects;
