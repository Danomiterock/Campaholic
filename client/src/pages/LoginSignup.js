import React, { useState } from "react";

import { Button, Card, CardDeck, Form, FormLabel } from "react-bootstrap";
import "../styles/LoginSignup.css";
import API from "../utils/API";

export const LoginSignup = () => {
  // const [first_name, setFirstName] = useState("");
  // const [last_name, setLastName] = useState("");
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [loginEmail, setLoginEmail] = useState("");
  // const [loginPassword, setLoginPassword] = useState("");
  const [formObject, setFormObject] = useState({});

  // console.log(first_name);

  // const signupHandler = (e) => {
  //   e.preventDefault();
  //   const user = {
  //     first_name: first_name,
  //     last_name: last_name,
  //     username: username,
  //     email: email,
  //     password: password,
  //   };
  //   axios
  //     .post("/api/users", user)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const loginHandler = (e) => {
  //   e.preventDefault();
  //   axios
  //     .get("/api/login", {
  //       loginEmail: loginEmail,
  //       loginPassword: loginPassword,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // Handles updating component state when the user types into the input field
  function handlePostInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handlePostFormSubmit(event) {
    event.preventDefault();
    API.saveUser({
      first_name: formObject.first_name,
      last_name: formObject.last_name,
      username: formObject.username,
      email: formObject.email,
      password: formObject.password,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="loginpage">
      <CardDeck className="loginsignup">
        <Card className="LoginSignupCard">
          <Form >
            <h3>Sign In</h3>

            <div className="form-group">
              <FormLabel>Email address</FormLabel>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                // onChange={(e) => {
                //   setLoginEmail(e.target.value);
                // }}
              />
            </div>

            <div className="form-group">
              <FormLabel>Password</FormLabel>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                // onChange={(e) => {
                //   setLoginPassword(e.target.value);
                // }}
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
            <Form onSubmit={handlePostFormSubmit}>
              <h3>Sign Up</h3>

              <div className="form-group">
                <FormLabel>First name</FormLabel>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  name="first_name"
                  onChange={handlePostInputChange}
                />
              </div>

              <div className="form-group">
                <FormLabel>Last name</FormLabel>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  name="last_name"
                  onChange={handlePostInputChange}
                />
              </div>
              <div className="form-group">
                <FormLabel>Username</FormLabel>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Username"
                  name="username"
                  onChange={handlePostInputChange}
                />
              </div>

              <div className="form-group">
                <FormLabel>Email address</FormLabel>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  name="email"
                  onChange={handlePostInputChange}
                />
              </div>

              <div className="form-group">
                <FormLabel>Password</FormLabel>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  name="password"
                  onChange={handlePostInputChange}
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
