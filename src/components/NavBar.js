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
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
