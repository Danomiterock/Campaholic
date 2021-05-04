import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

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
        {
        /* Commenting this out because I believe
        We want to have the Search bar on a different page 
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button className="primaryColor" variant="outline-info">
            Search
          </Button>
        </Form> */}
      </Navbar>
  );
}

export default NavList;