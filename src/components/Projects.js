import React from "react";
import { Card } from "reactstrap";
import "../styling/projects.css";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Card>
        <h3 className="projects-title">Projects</h3>
        <p className="projects-text">
          Below are a few of the projects that I am proud to have worked on. A
          more thorough list of the projects I have been involved in can be
          found on my <a href='https://github.com/chrispetito' target='_onblank'>GitHub</a>.
        </p>
      </Card>
    );
  }
}

export default Projects;
