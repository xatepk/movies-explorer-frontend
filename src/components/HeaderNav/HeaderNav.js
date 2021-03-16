import './HeaderNav.css';
import { Link } from 'react-router-dom';
import Account from '../Account/Account';

function HeaderNav() {
  return(
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
    </div>
  )
}

export default HeaderNav;

