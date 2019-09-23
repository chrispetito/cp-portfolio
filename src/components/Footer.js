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
        <a href="https://www.dropbox.com/s/d44jm9qkz8ydtu2/Chris%20Petito%20Resume.pdf?dl=0" target="_onblank">
          <i id="nav-icon-footer" className="fas fa-file"></i>
        </a>
      </div>
    );
  }
}

export default Footer;
