import React from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from './navbar/navbaritems';
import Homepage from './Homepage/Homepage';
import About from './About/About';
import Adduser from './AddUser/AddUser';


function App() {
  return (
    <div>
      <Navbar/>
        <Switch>
        <Route path="/home" component={Homepage} />
        <Route path="/adduser" component={Adduser} />
        <Route path="/deleteuser" component={Homepage} />
        <Route path="/about" component={About} />
        </Switch>

       
       
    </div>
  );
}

export default App;
