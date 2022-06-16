import React from 'react';
import logo from '../../images/we-made-fire-logo.png';
import './header.css';

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt='We Made Fire Brand Logo' className='header__logo' />
    </div>
  );
};

export default Header;
