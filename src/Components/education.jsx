import React, { Component } from "react";

class Education extends Component {
  state = {};

  render() {
    return (
      <div className="content-wrap">
        <h1>Education</h1>
        <hr></hr>
        <div className="flex-container btech-education">
          <div className="flex-item">
            <strong>BML Munjal University</strong>
            <br></br>
            <span>August 2016 - June 2020</span>
          </div>
          <div className="flex-item">
            <strong>Course - Bachelors of Engineering</strong>
            <br></br>
            <span>Electronics and Communications Engineering</span>
          </div>
        </div>
        <div className="flex-container inter-education">
          <div className="flex-item">
            <strong>Sri Chaitanya Junior College, Vishakapatnam</strong>
            <br></br>
            <span>July, 2014 - May, 2016</span>
          </div>
          <div className="flex-item">
            <strong>Intermediate Education</strong>
            <br></br>
            <span>Mathematics, Physics, Chemistry</span>
          </div>
        </div>
        <div className="flex-container school-education">
          <div className="flex-item">
            <strong>Narayana Model High School, Kuntikota</strong>
            <br></br>
            <span>July, 2013 - April, 2014</span>
          </div>
          <div className="flex-item">
            <strong>High School</strong>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
