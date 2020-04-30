import React,{Component} from 'react';
import axios from 'axios';
import './AddUser.css';

class Adduser extends Component{
    state={
        username:"",
        firstname:"",
        lastname:""
    }


     handleChange=(event)=>{
         this.setState({
                 [event.target.name]: event.target.value 

         })
     }

    submitHandler=(event)=>{
        event.preventDefault();
        const userObject = {
            username: this.state.username,
            firstname:this.state.firstname,
            lastname:this.state.lastname
        };
        if(this.state.username===""||this.state.firstname===""||this.state.lastname===""){
            alert("Please enter all the form values.");
        }
    axios.post('http://localhost:8000/adduser',userObject)
        .then(res=>{
        console.log("Success");   
        })
        .catch(err=>{
            console.log("Error");
        })
    }
  render(){
      return(
        <form className="form">
        <label >Username:</label><br/>
        <input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Enter user name" /><br/>
        <label>First name:</label><br/>
        <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} placeholder="Enter first name" /><br/>
         <label >Last name:</label><br/>
         <input type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange}placeholder="Enter last name" /><br/>
        <input className="button" type="submit" value="Submit" onClick={(event)=>{this.submitHandler(event)}}/>
        </form> 
   
        );
  }
}

export default Adduser;