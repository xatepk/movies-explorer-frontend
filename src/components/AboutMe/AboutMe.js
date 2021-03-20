import './AboutMe.css';
import photo from "../../images/profile-photo.svg";

function AboutMe() {
  return(
    <section className="about-me">
      <p className="about-me__heading">Студент</p>
      <div className="about-me__container">
        <div className="about-me__bio">
          <p className="about-me__name">Виталий</p>
          <p className="about-me__position">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__desc">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб&#8209;разработке, начал заниматься фриланс&#8208;заказами и ушёл с постоянной работы.</p>
          <ul className="about-me__list">
            <li className="about-me__item"><a className="about-me__link" href="https://ru-ru.facebook.com/" target = "_blank" rel="noreferrer">Facebook</a></li>
            <li className="about-me__item"><a className="about-me__link" href="https://github.com/xatepk" target = "_blank" rel="noreferrer">Github</a></li>
          </ul>
        </div>
        <img className="about-me__photo" src={photo} alt="фото профиля"></img>
      </div>
    </section>
  );
}

export default AboutMe;
