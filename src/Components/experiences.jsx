import React, { Component } from "react";

class Experiences extends Component {
  state = {};

  render() {
    return (
      <div className="content-wrap">
        <h1>Experiences</h1>
        <p>
          “Protons give an atom its identity, electrons its personality.” - Bill
          Bryson, A short history of nearly everything
        </p>
        <div className="flex-container">
          <div className="flex-item">
            <strong>IIY Software Pvt Ltd</strong>
            <br></br>
            <span>January 20 - June 20</span>
          </div>
          <div className="flex-item">
            <strong>Intern</strong>
            <br></br>
            <span>
              Worked as a intern. worked on IOT based Home Security Device,
              Adobe After Effects, Adobe Photoshop, Web development
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Experiences;
