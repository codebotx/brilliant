import React from "react";
import { Button } from "@material-ui/core";

import "./style.css";
import logo from "../../assets/logo.svg";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <div className="header-heading">
          <img style={{ width: "40px" }} src={logo}></img>{" "}
          <span style={{ padding: "0px 10px" }}></span>
        </div>
        <Navbar.Brand href="#home"> BASS ACADEMY</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Courses" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Course X</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Course Y
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Course Z</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Testimonials
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
