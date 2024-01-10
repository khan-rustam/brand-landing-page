import React from "react";
import logo from "../assets/Images/brand_logo.png";
import { LogIn } from "lucide-react";

const Navbar = () => {
  return (
    <header>
      <img src={logo} alt="" />
      <nav>
        <li>MENU</li>
        <li>LOCATION</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </nav>
      <button>
        LOGIN <LogIn />
      </button>
    </header>
  );
};

export default Navbar;
