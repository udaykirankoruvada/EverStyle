import React from 'react';
import { useState } from 'react';
import './navbar.css';
import logo from "../assests/Frontend_Assets/logo.png"
import cart from "../assests/Frontend_Assets/cart_icon.png";
import { Link } from 'react-router-dom';


const Navbar = () => {

  const [menu,setMenu] = useState("shop");

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="logo" />
            <p>EverStyle</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link to="/">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link to="/mens">Mens</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link to="/womens">Womens</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link to="/kids">Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
          <Link to='/login' onClick={()=>{setMenu("")}}><button>Login</button></Link>
          <Link to='/cart' onClick={()=>{setMenu("")}}><img src={cart} alt="cart" /></Link>
          <div className="nav-cart-count">0</div>
        </div>

    </div>
  );
}


export default Navbar;