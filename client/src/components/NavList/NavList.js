import React from "react";
import { BrowserRouter as useLocation } from "react-router-dom";
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
// import "../index.css"

function NavList() {
    // const location = useLocation();

    return (
        <>
    <Navbar className="brownBg">
      <Nav className="mr-auto">
        <Nav.Link href="/"><p className="whiteColor">Home</p></Nav.Link>
        <Nav.Link href="aboutme"><p className="whiteColor">About</p></Nav.Link>
        <Nav.Link href="contact"><p className="whiteColor">Profile</p></Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button className="primaryColor" variant="outline-info">Search</Button>
      </Form>
    </Navbar>
    <br />
  </>
  
    );
  }

export default NavList;
