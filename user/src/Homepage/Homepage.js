import React,{Component} from 'react';
import axios from 'axios';
import './Homepage.css';


class homepage extends Component{

    state={
        data:[]
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

    deleteUser=(username)=>{
        console.log("hi");
        axios.post("http://localhost:8000/deleteuser",{username:username})
        .then(res=>{
            console.log("Success");
        })
        .catch(err=>{
            console.log("error");
        });
        axios.get("http://localhost:8000/home")
        .then(res=>{
            const data=res.data;
            console.log(data);
            this.setState({data:data});

        })
        .catch(err=>{
            console.log("error");
        });

    }
    render(){
            let d=this.state.data;
            let contents=null;
            contents= d.map((data)=>{
                return(
                  <tbody key={data.username}>
                        <tr>
                            <td>{data.username}</td>
                            <td>{data.firstname}</td>
                            <td>{data.lastname}</td>
                             <td>{data.createdOn}</td>
                             <td><button onClick={()=>{this.deleteUser(data.username)}}>Delete User</button></td>
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