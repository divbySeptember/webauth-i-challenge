import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';

import axios from "axios";

export class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleLoginChanges = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();

    const loggedUser = {
      username: this.state.credentials.username,
      password: this.state.credentials.password
    };

    axios
      .post("http://localhost:5000/api/login", loggedUser)
      .then(res => {
        localStorage.setItem("auth", `${this.state.credentials.username}`);
        this.props.history.push("/users");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="login">
        <h1>Welcome back</h1>
        <Form className="login-form" onSubmit={this.login}>
        <FormGroup row>
        <Label> Username</Label>
          <Col sm={10}>
          <Input
            className="reg-username"
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleLoginChanges}
            placeholder="Enter Username"
            autoComplete="off"
            required
          />
          </Col>
          </FormGroup>
          <FormGroup row>
            <Label>Password</Label>
            <Col sm={10}>
          <Input
            className="reg-password"
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleLoginChanges}
            placeholder="Enter Password"
            autoComplete="off"
            required
          />
          </Col>
          </FormGroup>
         <FormGroup row>
         <Col sm={{ size: 10, offset: 2 }}>
            <Button outline color="primary" size="lg">Sign in</Button>
          </Col>
         </FormGroup>
        </Form>
        <p className="terms">
          By using Div By September, LLC you agree to the <b>Terms of Service</b> and{" "}
          <b>Privacy Policy</b>
        </p>
      </div>
    );
  }
}

export default Login;
