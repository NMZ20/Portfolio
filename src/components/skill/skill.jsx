import React, { Component } from "react";
import "./skill.css";

class Skill extends Component {
  render() {
    return (
      <div className="skill-container">
        <div className="skill-name">{this.props.skillName}</div>
      </div>
    );
  }
}

export default Skill;
