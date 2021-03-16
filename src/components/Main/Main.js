import './Main.css';
import Header from '../Header/Header';
import AuthNav from '../AuthNav/AuthNav';
import AboutProject from '../AboutProject/AboutProject';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

function Main() {
  return(
    <section className="main">
      <Header background="#465DFF">
        <AuthNav />
      </Header>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </section>
  )
}

export default Main;
