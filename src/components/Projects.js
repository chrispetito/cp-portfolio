import React from "react";
import { Card } from "reactstrap";
import "../styling/projects.css";
import lambdaLogo from "../assets/Lambda_Avatar_Red (3).jpg";
import pintereachScreenshot from "../assets/Pintereach-screenshot.png";

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
          found on my{" "}
          <a href="https://github.com/chrispetito" target="_onblank">
            GitHub
          </a>
          .
        </p>
        <Card>
          <div className="ind-project-div">
            <img
              className="project-img"
              src={lambdaLogo}
              alt="lambda-logo"
            ></img>
            <div className="title-div">
              {" "}
              <h4 className="ind-project-title">Lambda App Store</h4>
              <p className="description">
                I was part of the Lambda App Store team for Labs 14. Labs is an
                eight week build session for Lambda Students who have
                successfully completed the initial 15 weeks of instruction.
              </p>
              <p className="description">
                The Lambda App Store is a place for Labs students to showcase
                what they have built. It was a greenfield project, and will be
                passed along as a build-on.
              </p>
              <p className="description">
                As part of the full stack team, I worked on both the front end
                and back end for this project. We passed Labs with our
                submission, and are proud of what we have buit.
              </p>
              <div className="link-div">
                <a
                  className="ind-link"
                  href="https://github.com/labs14-lambda-app-store"
                  target="_onblank"
                >
                  See GitHub Repository
                </a>
                <a
                  className="ind-link"
                  href="https://lambdaappstore.org"
                  target="_onblank"
                >
                  View Live Website
                </a>
              </div>
            </div>
          </div>
          <div className="ind-project-div">
            <img
              className="project-img"
              src={pintereachScreenshot}
              alt="lambda-logo"
            ></img>
            <div className="title-div">
              {" "}
              <h4 className="ind-project-title">Pintereach</h4>
              <p className="description">
                I built out the front end for Pintereach during my Front End
                build week. Pintereach allows users to store articles on the web
                for future reference and access.
              </p>
              <p className="description">
                During build week, students are grouped together with other
                students from different cohorts. Each student has recently
                completed a module that was focused on something different (i.e.
                User Interface, Front End, Back End).
              </p>
              <p className="description">
                I was responsible for building a React app and building out the
                Front End so it properly communicated with both the server and
                database. I worked closely with the backend architect to ensure
                success.
              </p>
              <div className="link-div">
                <a
                  className="ind-link"
                  href="https://github.com/labs14-lambda-app-store"
                  target="_onblank"
                >
                  See GitHub Repository
                </a>
                <a
                  className="ind-link"
                  href="https://lambdaappstore.org"
                  target="_onblank"
                >
                  View Live Website
                </a>
              </div>
            </div>
          </div>
          <div className="ind-project-div">
            <img
              className="project-img"
              src={lambdaLogo}
              alt="lambda-logo"
            ></img>
            <div className="title-div">
              {" "}
              <h4 className="ind-project-title">Lambda App Store</h4>
              <p className="description">
                I was part of the Lambda App Store team for Labs 14. Labs is an
                eight week build session for Lambda Students who have
                successfully completed the initial 15 weeks of instruction.
              </p>
              <p className="description">
                The Lambda App Store is a place for Labs students to showcase
                what they have built. It was a greenfield project, and will be
                passed along as a build-on.
              </p>
              <p className="description">
                As part of the full stack team, I worked on both the front end
                and back end for this project. We passed Labs with our
                submission, and are proud of what we have buit.
              </p>
              <div className="link-div">
                <a
                  className="ind-link"
                  href="https://github.com/labs14-lambda-app-store"
                  target="_onblank"
                >
                  See GitHub Repository
                </a>
                <a
                  className="ind-link"
                  href="https://lambdaappstore.org"
                  target="_onblank"
                >
                  View Live Website
                </a>
              </div>
            </div>
          </div>
        </Card>
      </Card>
    );
  }
}

export default Projects;
