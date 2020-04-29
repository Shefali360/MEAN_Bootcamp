import React from 'react';
import { NavLink } from "react-router-dom";
import "./navbaritem.css"

const navitem=(props)=>{
    
        return (
      <li className="list-item">
        <NavLink className="item"
          to={props.link} 
        >
          {props.children}
        </NavLink>
      </li>
        );
}

export default navitem;