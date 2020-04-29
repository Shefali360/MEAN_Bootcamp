import React,{Component} from 'react';
import axios from 'axios';
import '../Content.css';


class about extends Component{

    state={
        title:null
    }
    componentDidMount(){
        axios.get("http://localhost:3030/about")
        .then(res=>{
            const title=res.data.title;
            this.setState({title:title});

        })
        .catch(err=>{
            console.log("Error");
        })
    }
    render(){
        return(
            <div className="content">
                {this.state.title}
            </div>
        );
    }

}

export default about;