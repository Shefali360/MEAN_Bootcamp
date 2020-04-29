import React from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from './navbar/navbaritems';
import Homepage from './Homepage/Homepage';
import About from './About/About';
import Contact from './Contact/Contact';

function App() {
  return (
    <div>
      <Navbar/>
        <Switch>
        <Route path="/home" component={Homepage} />
        {/* <Route path="/adduser" component={About} />
        <Route path="/about" component={Contact} /> */}
        </Switch>

       
       
    </div>
  );
}

export default App;
