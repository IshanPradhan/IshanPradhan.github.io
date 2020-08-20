import { Navbar } from "react-bootstrap";
import React from "react";
import { Nav } from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" fixed="top">
          <Nav className="mr-auto">
            <Nav.Link href="#aboutId" style={{ color: "white" }}>
              About Me
            </Nav.Link>
            <Nav.Link href="#skillsId" style={{ color: "white" }}>
              Skills
            </Nav.Link>
            <Nav.Link href="#projectId" style={{ color: "white" }}>
              Projects
            </Nav.Link>
            <Nav.Link href="#contactId" style={{ color: "white" }}>
              Contact Me
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
