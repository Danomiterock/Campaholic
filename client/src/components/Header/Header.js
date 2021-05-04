import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="header">
      <h1> Campaholic </h1>
      <Link to="/LoginSignup">Login</Link>
      <Link to="/LoginSignup">Sign Up</Link>
    </div>
  );
}

export default Header;