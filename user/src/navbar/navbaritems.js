import React from "react";
import NavbarItem from "./navbaritem";
import './navbaritems.css'


const Navbar = (props) => {
  return (
    <ul className="list">
      <NavbarItem link="/home">
        HOME
      </NavbarItem>
      <NavbarItem link="/adduser">ADD USER</NavbarItem>
      <NavbarItem link="/about">ABOUT US</NavbarItem>
    </ul>
   
  );
};

export default Navbar;