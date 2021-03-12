import './Footer.css';

function Footer () {
  return(
    <footer className="footer">
      <p className="footer__heading">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer-bottom">
        <p className="footer__copyright">&copy; 2021</p>
        <nav>
          <ul className="footer__nav">
            <li className="footer__item">
              <a href="https://praktikum.yandex.ru/profile/web/" className="footer__link">Яндекс.Практикум</a>
            </li>
            <li className="footer__item">
              <a href="https://github.com/xatepk" className="footer__link">Github</a>
            </li>
            <li className="footer__item">
              <a href="https://ru-ru.facebook.com/" className="footer__link">Facebook</a>
            </li>
          </ul>
        </nav>
      </div>


    </footer>
    )
}

export default Footer;
