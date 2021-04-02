import React, { useEffect } from 'react';
import './Register.css';
import Auth from '../Auth/Auth';

function Register({ handleRegister, badRequest, token, history }) {
  useEffect(() => {
    if (token) {
      history.push('./');
    }
  }, [])

  return(
    <Auth link="signin"
          heading="Добро пожаловать!"
          textButton="Зарегистрироваться"
          textQuestion="Уже зарегистрированы?"
          textLink="Войти"
          marginTop="69px"
          handleAuth={handleRegister}
          badRequest={badRequest} />
  );
}

export default Register;
