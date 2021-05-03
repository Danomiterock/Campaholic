import React from "react";
import NavList from "../NavList";

export function Header() {
  return (
    <header className="masthead">
        <div className="headnav">
            <h1> Campaholic </h1>
            <NavList />
        </div>
    </header>
  );
}

export default Header;