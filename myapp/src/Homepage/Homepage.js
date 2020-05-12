import React,{Component} from 'react';
import axios from 'axios';
import './Homepage.css';

class Homepage extends Component{
    
    render(){
        if(this.props.location.state){
        const token=this.props.location.state.token;
        axios.get("http://localhost:3030/home",
        {headers:{"authorization":`bearer ${token}`}})
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })
        return(
        <div className="outer">
            <h3>Welcome to my app!</h3>
            <p>Now you are authorized to access my app data.<br/>This app is created by Shefali Goyal.She is a MEAN trainee at To The New.</p>
        </div>
    );

}else{
    return <div className="outer">
        <p>You are not authenticated to visit this page!Login to visit this page.</p>
        </div>
}
}
}
export default Homepage;