import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component{
  state = {
    username: "",
    password:"",
    submitDisabled: true,
    token:null
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    },()=>{ if (
        this.state.username !== ""&&
        this.state.password!==""
      ) 
        this.setState({ submitDisabled: false });
  }
 );
}

  submitHandler = (event) => {
    event.preventDefault();
    const userObject = {
      username: this.state.username,
      password:this.state.password
    };

  axios
  .post("http://localhost:3030/login", userObject)
  .then((res) => {
    if(!res.data.error){
   this.setState({token:res.data.token});
    }
    console.log("Success");
    if(!res.data.error){
      this.props.history.push({
        pathname:"/home",
        state:{
          token:this.state.token
        }
      });
    }
  })
  .catch((err) => {
    console.log(err);
  });
};
    render(){
        return(
            <form className="form">
            <label>Email:</label>
            <br />
            <input
              type="email"
              name="username"
              value={this.state.username}
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
              value="Login"
              disabled={this.state.submitDisabled}
              onClick={(event) => {
                this.submitHandler(event);
              }}
            />
          </form>
        )
    }
}

export default Login;