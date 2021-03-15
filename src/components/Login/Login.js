import './Login.css';
import Auth from '../Auth/Auth';

function Login() {
  return(
    <Auth link="signup"
    heading="Рады видеть!"
    textButton="Войти"
    textQuestion="Ещё не зарегистрированы?"
    textLink="Регистрация"
    marginTop="179px" />
  )
}

export default Login;
