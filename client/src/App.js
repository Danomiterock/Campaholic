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
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/style.css";
import {ProtectedRoute} from './pages/ProtectedRoute'

function App() {
 

  return (
    <Router>
      <div>
        <header className="masthead">
          <div className="headnav">
            <Header />
            <NavList />
          </div>
        </header>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/LoginSignup" component={LoginSignup} />
        <Route exact path="/Search" component={Search} />
        <Route exact path="/About" component={About} />
        <ProtectedRoute exact path="/Profile" component={Profile} />
        <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
