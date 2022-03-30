import React, { Component } from "react";
import "./home.css";
import Typewriter from "../../components/typewriter/typewriter";

class Home extends Component {
  render() {
    return (
      <div className="b-container">
        <div className="picture" />
        <Typewriter />
      </div>
    );
  }
}

export default Home;
