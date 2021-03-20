import './Register.css';
import Auth from '../Auth/Auth';

function Register() {
  return(
    <Auth link="signin"
          heading="Добро пожаловать!"
          textButton="Зарегистрироваться"
          textQuestion="Уже зарегистрированы?"
          textLink="Войти"
          marginTop="69px">
      <label className="auth__label" htmlFor="name">Имя</label>
      <input className="auth__item" id="name" required type="text" placeholder="Имя" autoComplete="off" />
    </Auth>
  );
}

export default Register;
