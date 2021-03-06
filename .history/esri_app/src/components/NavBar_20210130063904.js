import { React, Component } from "react";
import polyu_logo from '../assets/polyu_logo.png';
import {
  Nav,
  NavDropdown,
  Navbar,
  Image
} from "react-bootstrap";
import {Link} from "react-router-dom"

export default class NavBar extends Component {
  render() {
    return (
      <>
        <Navbar bg="light" expand="sm">
          <Navbar.Brand>EM-FlowMeter</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/home">Map</Nav.Link>
              <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
              <Nav.Link as={Link} to="/dashboard">Data</Nav.Link>
              <NavDropdown title="Others" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  More Actions
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
                <Image src={polyu_logo} rounded />
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}
