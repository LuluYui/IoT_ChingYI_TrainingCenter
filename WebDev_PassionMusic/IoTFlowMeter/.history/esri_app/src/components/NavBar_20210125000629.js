import { React, Component } from "react";
import polyu_logo from '../assets/polyu_logo.png';
import {
  Nav,
  NavDropdown,
  Form,
  Navbar,
  Container,
  Row, 
  Col, 
  Image
} from "react-bootstrap";

export default class NavBar extends Component {
  render() {
    return (
      <>
        <Navbar bg="light" expand="sm">
          <Navbar.Brand href="#home">EM-FlowMeter</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Map</Nav.Link>
              <Nav.Link href="#link">Dashboard</Nav.Link>
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
