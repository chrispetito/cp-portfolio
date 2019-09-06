import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
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
  }

  handleScroll = (e) => {

  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" className="rs-navbar">
          <div className='navbar-title'>
            {" "}
            <img src={favicon} alt="cp-favion" className="cp-favicon"></img>
            <p className='cp-title'>Chris Petito</p>
          </div>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://github.com/chrispetito"
                  target="_onblank"
                >
                  GitHub
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Projects</DropdownItem>
                  <DropdownItem>Resume</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>About Me</DropdownItem>
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
