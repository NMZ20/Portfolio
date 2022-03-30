import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faLightbulb,
  faCode,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./navBar.css";

class NavBar extends Component {
  resize = () => {
    if (window.addEventListener) {
      window.addEventListener(
        "resize",
        function () {
          if (this.window.innerWidth < 1950) return;
          return "Home";
        },
        true
      );
    }
  };

  render() {
    return (
      <div className="navBar-container">
        <Link className="link grow" to="/home">
          <FontAwesomeIcon className="navBarIcon" icon={faHouse} />
          Home
        </Link>
        <Link className="link grow" to="/skills">
          <FontAwesomeIcon className="navBarIcon" icon={faLightbulb} />
          Skills
        </Link>
        <Link className="link grow" to="/projects">
          <FontAwesomeIcon className="navBarIcon" icon={faCode} />
          Projects
        </Link>
        <Link className="link grow" to="/about">
          <FontAwesomeIcon className="navBarIcon" icon={faInfoCircle} />
          About
        </Link>
      </div>
    );
  }
}

export default NavBar;
