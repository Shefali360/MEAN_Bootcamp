import React, { Component } from 'react';
import axios from 'axios';
import './Signup.css';

class Signup extends Component{
  state = {
    name: "",
    age: "",
    email: "",
    password:"",
    submitDisabled: true,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    },()=>{ if (
        this.state.name !== "" &&
        this.state.age !== "" &&
        this.state.email !== ""&&
        this.state.password!==""
      ) 
        this.setState({ submitDisabled: false });
  }
 );
}

  submitHandler = (event) => {
    event.preventDefault();
    const userObject = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
      password:this.state.password
    };

  axios
  .post("http://localhost:3030/signup", userObject)
  .then((res) => {
    console.log("Success");
  })
  .catch((err) => {
    console.log(err);
  });
};
    render(){
        return(
            <form className="form">
            <label>Name:</label>
            <br />
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Enter your name"
            />
            <br />
            <label>Age:</label>
            <br />
            <input
              type="number"
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
              placeholder="Enter your age"
            />
            <br/>
            <label>Email:</label>
            <br />
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Enter your email"
            />
            <br />
            <label>Password:</label>
            <br />
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Enter password"
            />
            <br />
            <input
              className="button"
              type="submit"
              value="Signup"
              disabled={this.state.submitDisabled}
              onClick={(event) => {
                this.submitHandler(event);
              }}
            />
          </form>
        )
    }
}

export default Signup;




















