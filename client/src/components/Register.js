import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from "axios";

export class Register extends Component {
  state = {
    registration: {
      username: "",
      password: ""
    }
  };

  handleRegChanges = e => {
    this.setState({
      registration: {
        ...this.state.registration,
        [e.target.name]: e.target.value
      }
    });
  };

  register = e => {
    e.preventDefault();
    let newUser = {
      username: this.state.registration.username,
      password: this.state.registration.password
    };

    const newLogin = {
      username: this.state.registration.username,
      password: this.state.registration.password
    };

    axios
      .post("http://localhost:5000/api/register", newUser)
      .then(() => this.props.history.push("/users"))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h2>Join Now and Get Your Free Beat!</h2>
        <Form className="form" onSubmit={this.register}>
        <FormGroup row>
          <Label> Username</Label>
          <Col sm={10}>
          <Input
            className="reg-username"
            type="type"
            name="username"
            value={this.state.registration.username}
            onChange={this.handleRegChanges}
            placeholder="Enter Username"
            autoComplete="off"
            required
          />
          </Col>
          </FormGroup>
          <FormGroup row>
          <Label> Password</Label>
          <Col sm={10}>
          <Input
            className="reg-password"
            type="password"
            name="password"
            value={this.state.registration.password}
            onChange={this.handleRegChanges}
            placeholder="Enter Password"
            autoComplete="off"
            required
          />
          </Col>
          </FormGroup>
          <FormGroup row>
         <Col sm={{ size: 10, offset: 2 }}>
            <Button outline color="primary" size="lg">Register Now</Button>
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

export default Register;
