import './Portfolio.css';

function Portfolio() {
  return(
    <section className="portfolio">
      <p className="portfolio__heading">Портфолио</p>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <p className="portfolio__title">Статичный сайт</p>
          <a className="portfolio__link" href="https://github.com/xatepk/first-project"><div className="portfolio__image"></div></a>
        </li>
        <li className="portfolio__item">
          <p className="portfolio__title">Адаптивный сайт</p>
          <a className="portfolio__link" href="https://github.com/xatepk/russian-travel"><div className="portfolio__image"></div></a>
        </li>
        <li className="portfolio__item">
          <p className="portfolio__title">Одностраничное приложение</p>
          <a className="portfolio__link" href="https://xatepk.students.nomoreparties.space/"><div className="portfolio__image"></div></a>
        </li>
      </ul>

    </section>
  );
}

export default Portfolio;
