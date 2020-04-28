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
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        </Switch>

       
       
    </div>
  );
}

export default App;
