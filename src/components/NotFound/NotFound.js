import './NotFound.css';
import { Link } from 'react-router-dom';

function NotFound({ handleGoBack }) {
  return(
    <div className="not-found">
      <h3 className="not-found__status">404</h3>
      <p className="not-found__text">Страница не найдена</p>
      <Link className="not-found__link" onClick={handleGoBack}>Назад</Link>
    </div>
  )
}

export default NotFound;
