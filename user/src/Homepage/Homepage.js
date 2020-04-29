import React,{Component} from 'react';
import axios from 'axios';
import '../Content.css';


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
                            <td>{data.password}</td>
                        </tr>
                 </tbody>
                  
                )

            })
        return(
            <div className="content">
            <table>
                <thead>
                        <tr>
                            <th>Username</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Password</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                     {contents}
             </table>
            </div>
        );
    }

}

export default homepage;