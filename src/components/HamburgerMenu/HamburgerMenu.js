import './HamburgerMenu.css';
import { Link } from 'react-router-dom';
import Account from '../Account/Account';
import cn from 'classnames';

function HamburgerMenu({ isOpen, onClick }) {
  return(
    <>
      <div className={cn("hamburger-menu", {"hamburger-menu_visible" : isOpen})} />
        <nav className={cn("hamburger-menu__nav", {"hamburger-menu__nav_visible" : isOpen})}>
          <button className="hamburger-menu__close" onClick={onClick} />
          <ul className="hamburger-menu__list">
            <li className="hamburger-menu__item">
              <Link to="/" className="hamburger-menu__link">Главная</Link>
            </li>
            <li className="hamburger-menu__item">
              <Link to="/movies" className="hamburger-menu__link">Фильмы</Link>
            </li>
            <li className="hamburger-menu__item">
              <Link to="/saved-movies" className="hamburger-menu__link">Сохранённые фильмы</Link>
            </li>
            <li className="hamburger-menu__item">
              <Account />
            </li>
          </ul>
        </nav>
      </>
  )
}

export default HamburgerMenu;
