import React from "react";
import {useLocation} from "react-router-dom"
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import "../index.css"

function Nav() {
    const location = useLocation();

    return (
        <>
    <Navbar className="brownBg">
      <Navbar.Brand href="/"><h1 className="secondaryColor">Campaholic</h1></Navbar.Brand>
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

export default Navbar;
