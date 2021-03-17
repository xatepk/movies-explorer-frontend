import './HeaderNav.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/movies" className="header-nav__link">Фильмы</Link>
          </li>
          <li className="header-nav__item">
            <Link to="/saved-movies" className="header-nav__link">Сохранённые фильмы</Link>
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

