import './Profile.css';
import { Link } from 'react-router-dom';

function Profile() {
  return(
    <div className="profile">
      <form className="profile__form" method="POST" action="#" name="profile" noValidate >
        <h3 className="profile__heading">Привет, Виталий!</h3>
        <label className="profile__item profile__label" for="name">Имя</label>
        <input  id="name" name="name" className="profile__item profile__input"
              placeholder="Виталий" required minLength="2" maxLength="40" autoComplete="off" type="text" />
        <label className="profile__item profile__label" for="email">Почта</label>
        <input  id="email" name="email"
                className="profile__item profile__input"
                placeholder="pochta@yandex.ru" required minLength="2" maxLength="200" autoComplete="off" type="text" />
        <input className="profile__button" type="submit" value= "Редактировать" />
      </form>
      <Link to="/" className="profile__logout">Выйти из аккаунта</Link>
    </div>
  );
}

export default Profile;
