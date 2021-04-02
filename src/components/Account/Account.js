import './Account.css';
import { NavLink } from 'react-router-dom';

function Account() {
  return(
    <div className="account">
      <NavLink to="/profile" className="account__link" activeStyle={{fontWeight:500}}>Аккаунт</NavLink>
      <NavLink to="/profile" className="account__image" />
    </div>
  );
}

export default Account;
