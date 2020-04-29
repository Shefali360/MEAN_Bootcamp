import React,{Component} from 'react';
import axios from 'axios';

class Adduser extends Component{
    state={
        username:"",
        firstname:"",
        lastname:"",
        password:""
    }


     handleChange=(event)=>{
         this.setState({
                 [event.target.name]: event.target.value 

         })
     }

    submitHandler=()=>{
        const userObject = {
            username: this.state.username,
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            password:this.state.password
            
        };
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
        <form>
        <label >Username:</label>
        <input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Enter user name"/>
        <label>First name:</label>
        <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} placeholder="Enter first name"/>
         <label >Last name:</label>
         <input type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange}placeholder="Enter last name"/>
         <label>Password:</label>
         <input type="text" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter password"/>
        <input type="submit" value="Submit" onSubmit={this.submitHandler}/>
        </form> 
   
        );
  }
}

export default Adduser;