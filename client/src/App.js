import React from "react";
// import { Form, Navbar, Card, Button } from "react-bootstrap";
// import API from "./utils/API";
import Header from "./components/Header";
import NavList from "./components/NavList";
import Home from "./pages/Home";
import LoginSignup from "./pages/LoginSignup";
import Search from "./pages/Search";
import About from "./pages/About";
import Profile from "./pages/Profile";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles/style.css";

function App() {
  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   API.searchAreas();
  // };

  return (
    <Router>
      <div>
        <header className="masthead">
          <div className="headnav">
            <Header />
            <NavList />
          </div>
        </header>
        <Route exact path="/" component={Home} />
        <Route exact path="/LoginSignup" component={LoginSignup} />
        <Route exact path="/Search" component={Search} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Profile" component={Profile} />
      </div>
    </Router>
  );
}

export default App;
