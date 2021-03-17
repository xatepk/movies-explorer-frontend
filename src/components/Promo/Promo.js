import './Promo.css';
import NavTab from '../NavTab/NavTab';

function Promo() {
  return(
    <section className="promo">
      <h1 className="promo__heading">Учебный проект студента факультета <span className="promo__span">Веб-разработки.</span></h1>
      <p className="promo__desc">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      <div className="promo__logo"></div>
      <NavTab />
    </section>
  );
}

export default Promo;
