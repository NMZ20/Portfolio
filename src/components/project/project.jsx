import React, { Component } from "react";
import "./project.css";

class Project extends Component {
  render() {
    return (
      <a
        className="project-container growProject"
        href={this.props.href}
        target="_blank"
      >
        <div className="project-name">{this.props.projectName}</div>
      </a>
    );
  }
}

export default Project;
