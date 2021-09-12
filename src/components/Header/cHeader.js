import React from 'react';
import logo from '../../images/logo.png';
import './cheader.css';

const Header = () => {
 
 return (
  <div className='header'>
   <img src={logo} alt="ema-john"/>
   <nav>
    <a href="/shop">Shop</a>
    <a href="/review">Order Review</a>
    <a href="/manage">Manage Inventory</a>
   </nav>
  </div>
  )
}
export default Header;