import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import "../styling/navbar.css";
import favicon from "../assets/cpfavicon.png";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar color="dark" light expand="md" className="rs-navbar">
          <div className="navbar-title">
            <p className="cp-title">Chris Petito</p>
          </div>

          <NavbarToggler onClick={this.toggle} className='navbar-dark' />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  href="https://www.linkedin.com/in/chris-petito-349499184/"
                  target='_onblank'
                  style={{ color: "white" }}    
                >
                  <i id="nav-icon" className="fab fa-linkedin"></i>LinkedIn
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://github.com/chrispetito"
                  target="_onblank"
                  style={{ color: "white" }}
                >
                  <i id="nav-icon" className="fab fa-github"></i>GitHub
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.dropbox.com/s/d44jm9qkz8ydtu2/Chris%20Petito%20Resume.pdf?dl=0"
                  target="_onblank"
                  style={{ color: "white" }}
                >
                  <i id="nav-icon" className="fas fa-file"></i>Resume
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
