import { Navbar } from "react-bootstrap";
import React, { Component } from "react";
import { Nav } from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" sticky="top">
          <Nav className="mr-auto">
            <Nav.Link href="#about" style={{ color: "white" }}>
              About Me
            </Nav.Link>
            <Nav.Link href="#skills" style={{ color: "white" }}>
              Skills
            </Nav.Link>
            <Nav.Link href="#projects" style={{ color: "white" }}>
              Projects
            </Nav.Link>
            <Nav.Link href="#contact" style={{ color: "white" }}>
              Contact Me
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
