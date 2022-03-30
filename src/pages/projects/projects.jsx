import React, { Component } from "react";
import Project from "../../components/project/project";
import "./projects.css";

class Projects extends Component {
  render() {
    return (
      <div className="projects-container">
        <div className="title">Projects</div>
        <Project
          projectName="Will be added soon"
          href=""
        />
      </div>
    );
  }
}

export default Projects;
