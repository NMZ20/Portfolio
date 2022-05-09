import React, { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../../components/navBar/navBar";
import Home from "../home/home";
import Skills from "../skills/skills";
import About from "../about/about";
import Projects from "../projects/projects";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="appContainer">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="" element={<Navigate to="/home" replace />} />
          </Routes>

          <div className="footer">
            <div className="getInTouch">
              <a
                className="hLink"
                href="https://www.instagram.com/n_mz20/"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="faIcon growIcon "
                  icon={faInstagram}
                />
              </a>
              <a
                className="hLink"
                href="https://www.linkedin.com/in/nasser-al-muzahmi-887379193"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="faIcon growIcon "
                  icon={faLinkedin}
                />
              </a>
              <a
                className="hLink"
                href="https://twitter.com/NasserAlmuzahmi"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="faIcon growIcon "
                  icon={faTwitter}
                />
              </a>
              <a
                className="hLink"
                href="https://github.com/NMZ20"
                target="_blank"
              >
                <FontAwesomeIcon className="faIcon growIcon " icon={faGithub} />
              </a>
              <a className="hLink" href="mailto:NMZ20@outlook.com">
                <FontAwesomeIcon
                  className="faIcon growIcon "
                  icon={faEnvelope}
                />
              </a>
            </div>
            <div className="designerName">
              Designed and Coded by Nasser Al-Muzahmi
            </div>
            <div className="copyRights">
              <FontAwesomeIcon className="cpIcon" icon={faCopyright} />
              NMZ 2022
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
