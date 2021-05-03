import React from "react";
import { Button } from "react-bootstrap";
import "../../index.css"


export function Header() {
  return (
    <header className="masthead">
        <div className="headnav">
            <h1> Campaholic </h1>            
        </div>
        <Button href="/LoginSignup"><p className="loginSignup">SignIn</p></Button>
        <Button href="/LoginSignup"><p className="loginSignup">SignUp</p></Button>
    </header>
  );
}

export default Header;
