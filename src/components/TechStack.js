import React from "react";
import { Card } from "reactstrap";
import "../styling/techstack.css";
import techstack from "../data/techstack";

class TechStack extends React.Component {
  constructor() {
    super();
    this.state = {
      techItems: []
    };
  }

  componentDidMount() {
    this.setState({
      techItems: techstack
    });
  }
  render() {
    return (
      <Card>
        <h3 className="tech-stack-title">Tech Stack</h3>
        <p className="tech-stack-text">Some of the things I use to build:</p>
        <div className="tech-badge-div">
          {this.state.techItems.map(item => {
            return (
              <div className="ind-tech-badge">
                <i className={item.iconClass}></i>
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
      </Card>
    );
  }
}

export default TechStack;
