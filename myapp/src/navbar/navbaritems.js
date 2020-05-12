import React from "react";
import NavbarItem from "./navbaritem";
import './navbaritems.css'


const Navbar = (props) => {
  return (
    <ul className="list">
      <NavbarItem link="/signup">
      SIGNUP
      </NavbarItem>
      <NavbarItem link="/login">
      LOGIN
      </NavbarItem>
      <NavbarItem link="/home">HOME</NavbarItem>
    </ul>
   
  );
};

export default Navbar;