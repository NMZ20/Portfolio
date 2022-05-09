import React, { Component } from "react";
import "./home.css";
import nasserImg from "./nasser.png";
import Typewriter from "../../components/typewriter/typewriter";

class Home extends Component {
  render() {
    return (
      <div className="b-container">
        <img className="picture" src={nasserImg} alt="Nasser's Photo" />

        <Typewriter />
      </div>
    );
  }
}

export default Home;
