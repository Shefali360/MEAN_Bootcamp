import React from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from './navbar/navbaritems';
import Homepage from './Homepage/Homepage';
import Login from './Login/Login';

function App() {
  return (
    <div>
        <Navbar/>
        <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/home" component={Homepage} />
        </Switch>

       
       
    </div>
  );
}

export default App;
