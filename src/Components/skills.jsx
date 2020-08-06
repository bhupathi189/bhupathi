import React, { Component } from "react";
// import logo from './Components'

class Skills extends Component {
  state = {
    imageURL: "https://image.flaticon.com/icons/png/512/56/56786.png",
    imageURL1: "https://img.icons8.com/ios/50/000000/star.png",
  };

  render() {
    return (
      <div className="content-wrap">
        <h1>Skills</h1>
        <div className="flex-container">
          <div className="flex-item">HTML5</div>
          <div className="flex-item">
            <span>{this.fivestar()}</span>
          </div>
        </div>

        <div className="flex-container">
          <div className="flex-item">CSS</div>
          <div className="flex-item">
            <span>{this.fourstar()}</span>
          </div>
        </div>

        <div className="flex-container">
          <div className="flex-item">JavaScript</div>
          <div className="flex-item">
            <span>{this.fourstar()}</span>
          </div>
        </div>
        <div className="flex-container">
          <div className="flex-item">Google Firebase</div>
          <div className="flex-item">
            <span>{this.threestar()}</span>
          </div>
        </div>
        <div className="flex-container">
          <div className="flex-item">React JS</div>
          <div className="flex-item">
            <span>{this.fourstar()}</span>
          </div>
        </div>
        <div className="flex-container">
          <div className="flex-item">Angular JS</div>
          <div className="flex-item">
            <span>{this.threestar()}</span>
          </div>
        </div>
        <div className="flex-container">
          <div className="flex-item">UI/UX</div>
          <div className="flex-item">
            <span>{this.fourstar()}</span>
          </div>
        </div>
        <div className="flex-container">
          <div className="flex-item">Adobe Photoshop</div>
          <div className="flex-item">
            <span>{this.fourstar()}</span>
          </div>
        </div>
        <div className="flex-container">
          <div className="flex-item">Adobe XD</div>
          <div className="flex-item">
            <span>{this.fivestar()}</span>
          </div>
        </div>
        <div className="flex-container">
          <div className="flex-item">Figma</div>
          <div className="flex-item">
            <span>{this.fivestar()}</span>
          </div>
        </div>
        <div className="flex-container">
          <div className="flex-item">Adobe After Effects</div>
          <div className="flex-item">
            <span>{this.fourstar()}</span>
          </div>
        </div>
        <div className="flex-container">
          <div className="flex-item">Adobe Premiere Pro</div>
          <div className="flex-item">
            <span>{this.fourstar()}</span>
          </div>
        </div>
        <div className="flex-container">
          <div className="flex-item">Sketch</div>
          <div className="flex-item">
            <span>{this.threestar()}</span>
          </div>
        </div>
        <div className="flex-container">
          <div className="flex-item">C Programming</div>
          <div className="flex-item">
            <span>{this.threestar()}</span>
          </div>
        </div>
      </div>
    );
  }
  star() {
    return (
      <img
        src={this.state.imageURL}
        alt="filled star"
        className="filled-star"
      ></img>
    );
  }
  star1() {
    return (
      <img
        src={this.state.imageURL1}
        alt="unfilled star"
        className="unfilled-star"
      ></img>
    );
  }

  onestar() {
    return (
      <React.Fragment>
        {this.star()}
        {this.star1()}
        {this.star1()}
        {this.star1()}
        {this.star1()}
      </React.Fragment>
    );
  }
  twostar() {
    return (
      <React.Fragment>
        {this.star()}
        {this.star()}
        {this.star1()}
        {this.star1()}
        {this.star1()}
      </React.Fragment>
    );
  }
  threestar() {
    return (
      <React.Fragment>
        {this.star()}
        {this.star()}
        {this.star()}
        {this.star1()}
        {this.star1()}
      </React.Fragment>
    );
  }
  fourstar() {
    return (
      <React.Fragment>
        {this.star()}
        {this.star()}
        {this.star()}
        {this.star()}
        {this.star1()}
      </React.Fragment>
    );
  }
  fivestar() {
    return (
      <React.Fragment>
        {this.star()}
        {this.star()}
        {this.star()}
        {this.star()}
        {this.star()}
      </React.Fragment>
    );
  }
}

export default Skills;
