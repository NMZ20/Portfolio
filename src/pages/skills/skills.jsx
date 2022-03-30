import React, { Component } from "react";
import "./skills.css";
import Skill from "../../components/skill/skill";

class Skills extends Component {
  render() {
    return (
      <div className="s-container">
        <div className="title">Skills</div>
        <div className="skills-container">
          <Skill skillName="Java" />
          <Skill skillName="Javascript" />
          <Skill skillName="HTML" />
          <Skill skillName="CSS" />
          <Skill skillName="C" />
          <Skill skillName="Python" />
          <Skill skillName="React.JS" />
        </div>
      </div>
    );
  }
}

export default Skills;
