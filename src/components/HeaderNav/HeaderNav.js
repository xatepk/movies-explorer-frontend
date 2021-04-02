import './HeaderNav.css';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Account from '../Account/Account';
import HamburgerButton from '../HamburgerButton/HamburgerButton';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

function HeaderNav() {

  const [isMenuOpen, toggleMenu] = useState(false);

  function toggleMenuMode() {
    toggleMenu(!isMenuOpen);
  }

  return(
    <>
      <div className="header-nav">
        <ul className="header-nav__list">
          <li className="header-nav__item">
            <NavLink to="/movies" className="header-nav__link" activeStyle={{fontWeight:500}}>Фильмы</NavLink>
          </li>
          <li className="header-nav__item">
            <NavLink to="/saved-movies" className="header-nav__link" activeStyle={{fontWeight:500}}>Сохранённые фильмы</NavLink>
          </li>
          <li className="header-nav__item">
            <Account />
          </li>
        </ul>
        <HamburgerButton onClick={toggleMenuMode} />
      </div>
      <HamburgerMenu isOpen={isMenuOpen} onClick={toggleMenuMode} />
    </>
  )
}

export default HeaderNav;

