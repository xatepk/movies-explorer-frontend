import './Main.css';
import AboutProject from '../AboutProject/AboutProject';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

function Main() {
  return(
    <>
    <Promo />
    <AboutProject />
    <Techs />
    <AboutMe />
    <Portfolio />
    <Footer />
    </>
  )
}

export default Main;
