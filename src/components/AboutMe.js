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
        <h3 className="about-me-title">About Me</h3>
        <p className="about-me-text">
          I am full stack web developer completing the Full Stack Web
          development track (WEB19) at{" "}
          <a
            className="lambda-link"
            href={"https://lambdaschool.com"}
            target="_onblank"
          >
            Lambda School
          </a>
          . I have studies technologies such as HTML, CSS, JavaScript, ReactJS,
          Node.js, ExpressJS, and more.
        </p>
        <p className="about-me-text">
          My goal is to find a position on a team that builds software that
          people care about. I want to contribute to that process, and look
          forward to working with others to create valuable, meaningful
          products.
        </p>
        <p className="about-me-text">
          Below are some of the technologies I have used, some of the projects I
          have been a part of, as well as my resume and contact information. If
          you would like to get in touch, you can email me{" "}
          <a href={"mailto:christopherpetito@gmail.com"}>here</a>. Thanks for
          stopping by, and I look forward to hearing from you!
        </p>
      </Card>
    );
  }
}

export default AboutMe;
