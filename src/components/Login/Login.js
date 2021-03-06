import './Login.css';
import Auth from '../Auth/Auth';

function Login({ handleLogin, badRequest }) {
  return(
    <Auth link="signup"
    heading="Рады видеть!"
    textButton="Войти"
    textQuestion="Ещё не зарегистрированы?"
    textLink="Регистрация"
    marginTop="157px"
    handleAuth={handleLogin}
    badRequest={badRequest} />
  )
}

export default Login;
