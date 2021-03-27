import React, { useContext } from 'react';
import cn from 'classnames';
import './Profile.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import HeaderNav from '../HeaderNav/HeaderNav';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../FormValidathion';

function Profile({ signOut, onUpdateUser, userUpdateStatus }) {
  const currentUser = useContext(CurrentUserContext);

  const {
    values,
    errors,
    isValid,
    handleChange
  } = useFormWithValidation({
      name: currentUser.name,
      email: currentUser.email
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    onUpdateUser(values);
  }

  return(
    <>
      <Header>
        <HeaderNav />
      </Header>
      <div className="profile">
        <form onSubmit={handleSubmit} className="profile__form" method="POST" action="#" name="profile" noValidate >
          <h3 className="profile__heading">Привет, {currentUser.name}!</h3>
          <label className="profile__item profile__label" for="name">Имя</label>
          <input
            id="name"
            name="name"
            onChange={handleChange}
            pattern="^[а-яА-ЯёЁa-zA-Z -]+$"
            value={values.name}
            className={cn("profile__item", "profile__input", {"profile__input_error" : errors.name})}
            placeholder="Виталий" required minLength="2" maxLength="40" autoComplete="off" type="text" />
          {errors.name && <span className="profile__error">{errors.name}</span>}
          <label className="profile__item profile__label" for="email">Почта</label>
          <input
            id="email"
            name="email"
            onChange={handleChange}
            value={values.email}
            className={cn("profile__item", "profile__input", {"profile__input_error" : errors.email})}
            placeholder="pochta@yandex.ru" required
            autoComplete="off" type="email" />
          {errors.email && <span className="profile__error">{errors.email}</span>}
          <input className={cn("profile__input", "profile__button", {"profile__button_active" : (isValid && (values.name !== currentUser.name || values.email !== currentUser.email))})} disabled={!isValid} type="submit" value= "Редактировать" />
        </form>
        <Link to="/" className="profile__logout" onClick={signOut}>Выйти из аккаунта</Link>
      <InfoTooltip userUpdateStatus={userUpdateStatus} />
      </div>
    </>
  );
}

export default Profile;
