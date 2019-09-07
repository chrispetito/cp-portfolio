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
          Some of the technologies I use to build:
        </p>
        <div className="tech-badge-div">
          <div className="ind-tech-badge">
            <i class="fab fa-html5"></i>
            <p>HTML5</p>
          </div>
          <div className="ind-tech-badge">
            <i class="fab fa-html5"></i>
            <p>CSS3</p>
          </div>
        </div>
      </Card>
    );
  }
}

export default TechStack;
