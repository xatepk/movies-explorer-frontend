import './Register.css';
import Auth from '../Auth/Auth';

function Register({ handleRegister }) {
  return(
    <Auth link="signin"
          heading="Добро пожаловать!"
          textButton="Зарегистрироваться"
          textQuestion="Уже зарегистрированы?"
          textLink="Войти"
          marginTop="69px"
          handleAuth={handleRegister} />
  );
}

export default Register;
