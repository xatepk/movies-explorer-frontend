import './Register.css';
import { Link } from 'react-router-dom';

function Register() {
  return(
    <div className="login">
        <p className="login__heading">Добро пожаловать!</p>
        <form className="login__form" method="POST" action="#">
          <label className="login__label" for="name">Имя</label>
          <input className="login__item" id="name" required type="text" placeholder="Имя" autoComplete="off" />
          <label className="login__label" for="email">E-mail</label>
          <input className="login__item" id="email" required id="username" type="email" placeholder="E-mail" autoComplete="off" />
          <label className="login__label" for="password">Пароль</label>
          <input className="login__item" required id="password" name="password" type="password" placeholder="Пароль" autoComplete="off" />
          <input className="login__button-container" type="submit" value="Зарегистрироваться" />
        </form>
        <div className="login__signin">
          <p className="login__signin-question">Уже зарегистрированы?</p>
          <Link to="signin" className="login__login-link">Войти</Link>
        </div>
    </div>

  );
}

export default Register;
