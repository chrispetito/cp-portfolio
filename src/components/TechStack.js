import React from "react";
import { Card } from "reactstrap";
import "../styling/techstack.css";

class TechStack extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Card>
        <h3 className="tech-stack-title">Tech Stack</h3>
        <p className="tech-stack-text">
          Some of the things I use to build:
        </p>
        <div className="tech-badge-div">
          <div className="ind-tech-badge">
            <i class="fab fa-html5"></i>
            <p>HTML5</p>
          </div>
          <div className="ind-tech-badge">
          <i class="fab fa-css3-alt"></i>
            <p>CSS3</p>
          </div>
          <div className="ind-tech-badge">
          <i class="fab fa-js-square"></i>
            <p>JavaScript</p>
          </div>
          <div className="ind-tech-badge">
          <i class="fab fa-react"></i>
            <p>React</p>
          </div>
          <div className="ind-tech-badge">
          <i class="fab fa-node-js"></i>
            <p>Node.js</p>
          </div>
          <div className="ind-tech-badge">
          <i class="fas fa-code"></i>
            <p>Express.js</p>
          </div>
          <div className="ind-tech-badge">
          <i class="fas fa-code"></i>
            <p>REST API</p>
          </div>
          <div className="ind-tech-badge">
          <i class="fab fa-react"></i>
            <p>Reactstrap</p>
          </div>
          <div className="ind-tech-badge">
          <i class="fas fa-code"></i>
            <p>Material UI</p>
          </div>
          <div className="ind-tech-badge">
          <i class="fas fa-code"></i>
            <p>Jest</p>
          </div>
          <div className="ind-tech-badge">
          <i class="fas fa-database"></i>
            <p>SQLite3</p>
          </div>
          <div className="ind-tech-badge">
          <i class="fas fa-database"></i>
            <p>PostgreSQL</p>
          </div>
          <div className="ind-tech-badge">
          <i class="fas fa-server"></i>
            <p>Netlify</p>
          </div>
          <div className="ind-tech-badge">
          <i class="fas fa-server"></i>
            <p>Heroku</p>
          </div>
        </div>
      </Card>
    );
  }
}

export default TechStack;
