import React, { useState } from "react";

import {
  Button,
  Card,
  CardDeck,
  Form,
  FormLabel,
} from "react-bootstrap";
import "../styles/LoginSignup.css";
import axios from "axios";


export const LoginSignup = () => {

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  console.log(first_name);

  const signupHandler = async (e) => {
    e.preventDefault();
    const user = {first_name, last_name, username, email, password};
    await axios.post("/api/users", user)
    .then((res)=> {
      console.log(res.data)
    }).catch((err) =>{
      console.log(err)
    })

  }
  const loginHandler = (e) => {
    e.preventDefault();
    axios.get("/api/login", {
     
      email: loginEmail,
      password: loginPassword
      
    }).then((res)=> {
      console.log(res)
    }).catch((err) =>{
      console.log(err)
    })

  }

  return (
    <div className="loginpage">
      <CardDeck className="loginsignup">
        <Card className="LoginSignupCard">
          <Form onSubmit={(e) => loginHandler(e)}>
            <h3>Sign In</h3>

            <div className="form-group">
              <FormLabel>Email address</FormLabel>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(e) => { setLoginEmail(e.target.value) }}
              />
            </div>

            <div className="form-group">
              <FormLabel>Password</FormLabel>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e) => { setLoginPassword(e.target.value) }}
              />
            </div>

            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <FormLabel
                  className="custom-control-label"
                  htmlFor="customCheck1"
                >
                  Remember me
                </FormLabel>
              </div>
            </div>

            <Button type="submit" className="btn btn-primary btn-block :hover">
              Submit
            </Button>
          </Form>
        </Card>

        <br />

        <div>
          <Card className="LoginSignupCard">
            <Form onSubmit={(e) => signupHandler(e)}>
              <h3>Sign Up</h3>

              <div className="form-group">
                <FormLabel>First name</FormLabel>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  onChange={(e) => { setFirstName(e.target.value) }}
                />
              </div>

              <div className="form-group">
                <FormLabel>Last name</FormLabel>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  onChange={(e) => { setLastName(e.target.value) }}
                />
              </div>
              <div className="form-group">
                <FormLabel>Username</FormLabel>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Username"
                  onChange={(e) => { setUsername(e.target.value) }}
                />
              </div>

              <div className="form-group">
                <FormLabel>Email address</FormLabel>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(e) => { setEmail(e.target.value) }}
                />
              </div>

              <div className="form-group">
                <FormLabel>Password</FormLabel>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(e) => { setPassword(e.target.value) }}
                />
              </div>

              <Button type="submit" className="btn btn-primary btn-block">
                Sign Up
              </Button>
            </Form>
          </Card>
        </div>
      </CardDeck>
    </div>
  );
};

export default LoginSignup;
