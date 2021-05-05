import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function NavList() {

  return (
      <Navbar className="navbar">
        <Nav>
          <Nav.Link href="/">
            <p>Home</p>
          </Nav.Link>
          <Nav.Link href="Search">
            <p>Search</p>
          </Nav.Link>
          <Nav.Link href="About">
            <p>About</p>
          </Nav.Link>
          <Nav.Link href="Profile">
            <p>Profile</p>
          </Nav.Link>
        </Nav>
      </Navbar>
  );
}

export default NavList;