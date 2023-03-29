import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Nav.css"

const Navbar = () => {

  const [click,setClick]=useState(false);

  const handle=()=>setClick(!click);
  return (
    <div className='nav-page'>
    <NavLink to="cart" ><i className="fa-sharp fa-solid fa-cart-shopping"></i></NavLink> 
      <div className='nav-style' onClick={ handle}>
        {click ?(<i className="fa-solid fa-xmark"></i>):( <i className="fa-solid fa-bars"></i>)}
      <h1><i className="fa-brands fa-amazon"></i>Kairos</h1>
      <ul className={click ? "nav-link active":"nav-link"}>
     <li><NavLink to="/">Home</NavLink> </li>
     <li><NavLink to="about">Trending</NavLink></li>
     <li><NavLink to="blog">Shopping</NavLink></li>
     <li><NavLink to="contact">Mobiles</NavLink></li>
      </ul>
      </div>
    </div>
  )
}

export default Navbar;