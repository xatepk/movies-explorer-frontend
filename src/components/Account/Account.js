import './Account.css';
import { Link } from 'react-router-dom';

function Account() {
  return(
  <Link to="/profile" className="account__link">Аккаунт</Link>
  );
}

export default Account;
