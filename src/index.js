import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Nav from "./Components/nav_bar.jsx";
import Heading from "./Components/heading.jsx";
import Profile from "./Components/profile.jsx";
import Education from "./Components/education.jsx";
import Experiences from "./Components/experiences.jsx";
import Skills from "./Components/skills.jsx";
import "./Components/animate.css/animate.css";

ReactDOM.render(<Nav />, document.getElementById("nav-bar"));
ReactDOM.render(<Heading />, document.getElementById("heading"));
ReactDOM.render(<Profile />, document.getElementById("profile"));
ReactDOM.render(<Education />, document.getElementById("education"));
ReactDOM.render(<Experiences />, document.getElementById("experiences"));
ReactDOM.render(<Skills />, document.getElementById("skills"));
