import './Auth.css';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../FormValidathion';
import Logo from '../Logo/Logo';
import React from 'react';
import cn from 'classnames';

function Auth({
  heading,
  textButton,
  textLink,
  link,
  textQuestion,
  marginTop,
  handleAuth,
  badRequest
}) {

  const {
    values,
    errors,
    isValid,
    handleChange
  } = useFormWithValidation({});


  function handleSubmit(e){
    e.preventDefault();
    handleAuth(values);
  }

  const marginStyle = {
    marginTop: marginTop
  }

  return(
    <div className="auth">
      <Logo />
      <p className="auth__heading">{heading}</p>
      <form onSubmit={handleSubmit} className="auth__form" method="POST" action="#">
        {(link === "signin") &&
        <>
          <label className="auth__label" htmlFor="name">Имя</label>
          <input className={cn("auth__item", {"auth__item_error" : errors.name})}
            value={values.name}
            onChange={handleChange}
            minLength={ 2 }
            pattern="^[а-яА-ЯёЁa-zA-Z -]+$"
            id="name" name="name"
            required type="text"
            placeholder="Имя"
            autoComplete="off" />
          {errors.name && <span className="auth__error">{errors.name}</span>}
        </>
        }
        <label className="auth__label" htmlFor="email">E-mail</label>
        <input className={cn("auth__item", {"auth__item_error" : errors.email})}
          value={values.email}
          onChange={handleChange}
          pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          id="email" name="email"
          required type="email"
          placeholder="E-mail"
          autoComplete="off" />
        {errors.email && <span className="auth__error">{errors.email}</span>}
        <label className="auth__label" htmlFor="password">Пароль</label>
        <input className={cn("auth__item", {"auth__item_error" : errors.password})}
          value={values.password}
          onChange={handleChange}
          required
          id="password"
          name="password"
          type="password"
          placeholder="Пароль"
          autoComplete="off"
          minLength="6" />
        {errors.password && <span className="auth__error">{errors.password}</span>}
        <input style={marginStyle} className={cn("auth__button-container", {"auth__button-container_active" : isValid})} type="submit" value={textButton} disabled={!isValid} />
        {badRequest && <span className="auth__error">{badRequest}</span>}
      </form>
      <div className="auth__question">
        <p className="auth__question-text">{textQuestion}</p>
        <Link to={link} className="auth__auth-link">{textLink}</Link>
      </div>
    </div>
  )
}

export default Auth;
