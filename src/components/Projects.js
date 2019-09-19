import React from "react";
import { Card } from "reactstrap";
import "../styling/projects.css";
import lambdaLogo from "../assets/Lambda_Avatar_Red (3).jpg";
import pintereachScreenshot from "../assets/Pintereach-screenshot.png";
import dylScreenshot from "../assets/dyl-screenshot.png";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Card className='projects-card'>
      <div className='card-content'>
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
                  View GitHub Repository
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
              className="project-img-alt"
              src={pintereachScreenshot}
              alt="lambda-logo"
            ></img>
            <div className="title-div">
              {" "}
              <h4 className="ind-project-title">Pintereach</h4>
              <p className="description">
                I built out the front end for Pintereach during my front end
                build week. Pintereach allows users to store articles on the web
                for future reference and access.
              </p>
              <p className="description">
                During build week, students are grouped together with other
                students from different cohorts. Each student has recently
                completed a module that was focused on something different (i.e.
                user interface, front end, back end).
              </p>
              <p className="description">
                I was responsible for building a React app and building out the
                front end so it properly communicated with both the server and
                database. I worked closely with the back end architect to ensure
                success.
              </p>
              <div className="link-div">
                <a
                  className="ind-link"
                  href="https://github.com/pintereach-pmltr"
                  target="_onblank"
                >
                  View GitHub Repository
                </a>
                <a
                  className="ind-link"
                  href="https://pintereach1.netlify.com/"
                  target="_onblank"
                >
                  View Live Website
                </a>
              </div>
            </div>
          </div>
          <div className="ind-project-div">
            <img
              className="project-img-alt"
              src={dylScreenshot}
              alt="lambda-logo"
            ></img>
            <div className="title-div">
              {" "}
              <h4 className="ind-project-title">Design Your Life</h4>
              <p className="description">
                For the Design Your Life project, I was responsible for building
                out the back end and ensuring it communicated properly with the
                front end.
              </p>
              <p className="description">
                Design Your Life allows users to input different daily
                activities and give them a happiness and energy score. It then
                allows users to view a weekly log to see which activities
                brought them the most energy and happiness. It is based on the
                Designing Your Life course at Stanford.
              </p>
              <p className="description">
                As the back end architect, I was responsible for creating an API
                that could be used to create, read, update, and delete resources
                sent to it from the front end.
              </p>
              <div className="link-div">
                <a
                  className="ind-link"
                  href="https://github.com/itsdesignyourlife"
                  target="_onblank"
                >
                  View GitHub Repository
                </a>
                <a
                  className="ind-link"
                  href='https://designyourlife.netlify.com/'
                  target="_onblank"
                >
                  View Live Website
                </a>
              </div>
            </div>
          </div>
          </div>
      </Card>
    );
  }
}

export default Projects;
