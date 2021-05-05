import React from "react";
import { Button, Card, CardDeck, Form, FormLabel } from "react-bootstrap";
import "./LoginSignup.css";

export const LoginSignup = () => {
  return (
    <CardDeck className="loginsignup">
      <Card className="LoginSignupCard">
        <Form>
          <h3>Sign In</h3>

          <div className="form-group">
            <FormLabel>Email address</FormLabel>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <FormLabel>Password</FormLabel>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
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

          <Button type="submit" className="btn btn-primary btn-block">
            Submit
          </Button>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
        </Form>
      </Card>

      <br />

      <div>
        <Card className="LoginSignupCard">
          <Form>
            <h3>Sign Up</h3>

            <div className="form-group">
              <FormLabel>First name</FormLabel>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
              />
            </div>

            <div className="form-group">
              <FormLabel>Last name</FormLabel>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
              />
            </div>

            <div className="form-group">
              <FormLabel>Email address</FormLabel>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group">
              <FormLabel>Password</FormLabel>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>

            <Button type="submit" className="btn btn-primary btn-block">
              Sign Up
            </Button>
            <p className="forgot-password text-right">
              Already registered <a href="#">sign in?</a>
            </p>
          </Form>
        </Card>
      </div>
    </CardDeck>
  );
};

export default LoginSignup;
