import React from 'react';
import logo from '../img/logos.svg';
import search from '../img/search.svg'
import cart from '../img/cart.svg'
import avatar from '../img/avatar.svg'
import  '../styles/header.css';
const Header = () => {
  return (
    <header>
      <div className='headerBlock'>
        <div className="header-block-space-between">
        <img src={logo} alt="Мой логотип" />
        <ul className="header-block-ul-sapce">
            <li className="header-block-ul-li">Home</li>
            <li className="header-block-ul-li">Man</li>
            <li className="header-block-ul-li">Woman</li>
            <li className="header-block-ul-li">Kids</li>
            <li className="header-block-ul-li">Sale</li>
        </ul>
        <div className="header-block-right-flex">
        <img src={search} alt="Search" />
        <img src={cart} alt="Cart" />
        <img src={avatar} alt="Avatar" />
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;