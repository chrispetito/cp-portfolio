import React from "react";
import { Card } from "reactstrap";
import "../styling/aboutme.css";

class AboutMe extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Card>
        <h1 className='about-me-title'>About Me</h1>
        <p className='about-me-text'>This is the about me section. More coming soon!</p>
      </Card>
    );
  }
}

export default AboutMe;
