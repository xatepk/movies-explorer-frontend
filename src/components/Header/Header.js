import './Header.css';
import Logo from '../Logo/Logo';

function Header({ children, background }) {
  return(
    <header className="header" style={{backgroundColor: background}}>
      <Logo />
      {children}
    </header>
  )
}

export default Header;
