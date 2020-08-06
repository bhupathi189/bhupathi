import React, { Component } from "react";

class Profile extends Component {
  state = {
    imageurl: "https://images.gr-assets.com/users/1507824208p5/72479926.jpg",
  };
  render() {
    return (
      <div className="content-wrap">
        <h1>Profile</h1>
        <h2>I am creative web developer</h2>
        <hr></hr>
        <section className="flex-container">
          <div className="flex-item">{this.aboutMe()}</div>
          <div className="flex-item">
            <img src={this.state.imageurl} alt="profile"></img>
          </div>
          <div className="flex-item">{this.details()}</div>
        </section>
        {/* <div>{this.aboutMe()}</div>
        <img src={this.state.imageurl} alt="profile"></img>
        <div>{this.details()}</div> */}
      </div>
    );
  }
  aboutMe() {
    return (
      <React.Fragment>
        <h2>About Me</h2>
        <p>
          As a recent graduate, I am seeking a role which allows me to continue
          learning and perfecting my skills as I provide high-quality work, and
          encourages me to flourish as a as a software developer.
        </p>
      </React.Fragment>
    );
  }
  details() {
    return (
      <React.Fragment>
        <h2>Details</h2>
        <span>
          <strong>Name:</strong> Pattapagalu Bhupathi
        </span>
        <br></br>
        <span>
          <strong>Age:</strong> 22 years
        </span>
        <br></br>
        <span>
          <strong>Location:</strong> Srikakulam, Andhra Pradesh, India
        </span>
        <br></br>
      </React.Fragment>
    );
  }
}

export default Profile;
