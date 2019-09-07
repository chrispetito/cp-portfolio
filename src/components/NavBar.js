import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
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
        <Navbar color="light" light expand="md" className="rs-navbar">
          <div className="navbar-title">
            {" "}
            <img src={favicon} alt="cp-favion" className="cp-favicon"></img>
            <p className="cp-title">Chris Petito</p>
          </div>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/"><i id='nav-icon' className="far fa-id-badge"></i>Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://github.com/chrispetito"
                  target="_onblank"
                >
                  <i id='nav-icon' className="fab fa-github"></i>GitHub
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Other
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  <i id='dropdown-icon' className="fas fa-circle-notch"></i>
                    Projects
                  </DropdownItem>
                  <DropdownItem>
                  <i id='dropdown-icon' className="fas fa-info-circle"></i>Resume
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                  <i id='dropdown-icon' className="fas fa-user-circle"></i>
                    About Me
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
