import React from "react";
// import { Form, Navbar, Card, Button } from "react-bootstrap";
// import API from "./utils/API";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home"; 
import About from "./pages/About"; 
import Profile from "./pages/Profile"; 

function App() {

  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   API.searchAreas();
  // };

  return (
      <>
      <Router>
      <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/profile" component={Profile} />
      </div>
      </Router>
    <div>
      <Home />    
    </div>
    </>
  );
}

export default App;
