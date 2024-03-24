import React, { useState } from "react";
import logo_light from '../assests/avataar_logo_white.png'
import search_light from '../assests/search_black.png'
import "./Navbar.css";


export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <img src={logo_light} alt="" className='logo'/>

      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <a href="/Home">Home</a>
        </li>
        <li>
          <a href="/Product">Product</a>
        </li>
        <li>
          <a href="/Features">Features</a>
        </li>
        <li>
          <a href="/About">About</a>
        </li>
        <li  className="search-box">
          <input type="text" placeholder='Search'/> 
          <img src={search_light} alt="" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar
