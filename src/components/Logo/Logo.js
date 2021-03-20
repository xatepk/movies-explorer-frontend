import './Logo.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logotip.svg';

function Logo() {
  return(
    <Link to="/" className="logo"><img src={logo} alt="логотип"></img></Link>
  )
}

export default Logo;
