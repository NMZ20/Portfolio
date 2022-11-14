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
          href="https://nmz20.github.io/Multible-Choice-Quiz/"
        />
        <Project
          projectName="Omniware's Website"
          href="https://seal-app-fiyei.ondigitalocean.app/"
        />
        <Project
          projectName="Calendar App"
          href="https://nmz20.github.io/golands-calendar-task/"
        />
      </div>
    );
  }
}

export default Projects;
