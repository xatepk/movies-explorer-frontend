import './Auth.css';
import { Link } from 'react-router-dom';

function Auth({ heading, children, textButton, textLink, link, textQuestion, marginTop}) {

  const marginStyle = {
    marginTop: marginTop
  }

  return(
    <div className="auth">
        <p className="auth__heading">{heading}</p>
        <form className="auth__form" method="POST" action="#">
          {children}
          <label className="auth__label" htmlFor="email">E-mail</label>
          <input className="auth__item" id="email" required type="email" placeholder="E-mail" autoComplete="off" />
          <label className="auth__label" htmlFor="password">Пароль</label>
          <input className="auth__item" required id="password" name="password" type="password" placeholder="Пароль" autoComplete="off" />
          <input style={marginStyle} className="auth__button-container" type="submit" value={textButton} />
        </form>
        <div className="auth__question">
          <p className="auth__question-text">{textQuestion}</p>
          <Link to={link} className="auth__auth-link">{textLink}</Link>
        </div>
    </div>
  )
}

export default Auth;
