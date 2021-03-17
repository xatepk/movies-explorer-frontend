import './AuthNav.css';
import { Link } from 'react-router-dom';

function AuthNav() {
  return(
    <nav className="auth-nav__nav">
      <ul className="auth-nav__list">
        <li className="auth-nav__item">
          <Link to="/signup" className="auth-nav__link">Регистрация</Link>
        </li>
        <li className="auth-nav__item">
          <Link to="/signin" className="auth-nav__link auth-nav__link_green">Войти</Link>
        </li>
      </ul>
    </nav>
  )
}

export default AuthNav;
