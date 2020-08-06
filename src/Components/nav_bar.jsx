import React, { Component } from "react";

class Nav extends Component {
  state = {};

  render() {
    return (
      <div className="nav-bar-div">
        <div className="flex-container">
          <a href="#profile" className="nav-bar-refs flex-item">
            Profile
          </a>
        </div>
        <div className="flex-container">
          <a href="#education" className="nav-bar-refs flex-item">
            Education
          </a>
        </div>
        <div className="flex-container">
          <a href="#experiences" className="nav-bar-refs flex-item">
            Experiences
          </a>
        </div>
        <div className="flex-container">
          <a href="#skills" className="nav-bar-refs flex-item">
            Skills
          </a>
        </div>
        <div className="flex-container">
          <a href="#projects" className="nav-bar-refs flex-item">
            Projects
          </a>
        </div>
        <div className="flex-container">
          <a href="contact" className="nav-bar-refs flex-item">
            Contact
          </a>
        </div>
      </div>
    );
  }
}

export default Nav;
