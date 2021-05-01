import React from "react";
import { Form, Navbar, Card, Button } from "react-bootstrap";
import API from "./utils/API";
// import Navbar from "./components/Navbar";

function App() {

  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.searchAreas();
  };

  return (
    <div>
      <Navbar />
      <Card />
      <Form />
      <Button onClick={handleFormSubmit}>Submit</Button>
    </div>
  );
}

export default App;
