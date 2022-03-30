import React, { Component } from "react";
import Project from "../../components/project/project";
import "./projects.css";

class Projects extends Component {
  render() {
    return (
      <div className="projects-container">
        <Project
          projectName="Project 1"
          href="https://www.youtube.com/watch?v=AnOAZsezLEg"
        />
        <Project projectName="Project 2" />
        <Project projectName="Project 3" />
        <Project projectName="Project 4" />
      </div>
    );
  }
}

export default Projects;
