import React,{Component} from 'react';
import axios from 'axios';
import './Homepage.css';


class homepage extends Component{

    state={
        data:[],
        username:''
    }
    componentDidMount(){
        axios.get("http://localhost:8000/home")
        .then(res=>{
            const data=res.data;
            console.log(data);
            this.setState({data:data});

        })
        .catch(err=>{
            console.log("Error");
        })
    }

    deleteUser=(event)=>{
        this.setState({username:event.target.username})
        console.log(this.state.username);
        axios.post("http://localhost:8000/deleteuser",this.state.username)
        .then(res=>{
            console.log("Success");
        })
        .catch(err=>{
            console.log("error");
        })
    }
    render(){
            let d=this.state.data;
            let contents=null;
            contents= d.map((data)=>{
                return(
                  <tbody key={data.username}>
                        <tr >
                            <td>{data.username}</td>
                            <td>{data.firstname}</td>
                            <td>{data.lastname}</td>
                             <td>{data.createdOn}</td>
                             <td><button onClick={(event)=>{this.deleteUser(event)}}>Delete User</button></td>
                        </tr>
                 </tbody>
                  
                )

            })
        return(
            <table className="table">
                <thead>
                        <tr>
                            <th>Username</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>CreatedOn</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                     {contents}
             </table>
           
        );
    }

}

export default homepage;