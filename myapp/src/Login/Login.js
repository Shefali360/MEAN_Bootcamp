import React, { Component } from 'react';

class Login extends Component{
    render(){
        return(
            <form className="form">
            <label>Name:</label>
            <br />
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
            />
            <br />
            <label>Age:</label>
            <br />
            <input
              type="number"
              name="age"
              placeholder="Enter your age"
            />
            <br/>
            <label>Email:</label>
            <br />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <br />
            <label>Password:</label>
            <br />
            <input
              type="password"
              name="password"
              placeholder="Enter password"
            />
            <br />
            <input
              className="button"
              type="submit"
              value="Signup"
            //   onClick={(event) => {
            //     this.submitHandler(event);
            //   }}
            />
             <input
              className="button"
              type="submit"
              value="Login"
            //   onClick={(event) => {
            //     this.submitHandler(event);
            //   }}
            />
          </form>
        )
    }
}

export default Login;