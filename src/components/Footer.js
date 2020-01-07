import React from "react";
import "../styling/footer.css";

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="footer-div">
        <a href="https://www.linkedin.com/in/chris-petito-349499184/" target="_onblank">
          <i id="nav-icon-footer" className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/chrispetito" target="_onblank">
          <i id="nav-icon-footer" className="fab fa-github"></i>
        </a>
      </div>
    );
  }
}

export default Footer;
