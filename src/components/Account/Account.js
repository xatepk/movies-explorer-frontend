import './Account.css';
import { Link } from 'react-router-dom';

function Account() {
  return(
    <div className="account">
      <Link to="/profile" className="account__link">Аккаунт</Link>
      <Link to="/profile" className="account__image" />
    </div>
  );
}

export default Account;
