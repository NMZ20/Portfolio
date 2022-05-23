import { faFaceFrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import "./notFound.css";

class NotFound extends Component {
  render() {
    return (
      <div className="notFound">
        <FontAwesomeIcon className="sadIcon" icon={faFaceFrown} />
        404 - Not Found
      </div>
    );
  }
}

export default NotFound;
