import './MoviesCard.css';
import movie from '../../images/_movie.svg';

function MoviesCard() {
  return(
    <li className="movie">
      <img className="movie__image" alt="movie" src={movie} />
      <div className="movie__description">
        <h2 className="movie__name">33 слова о дизайне</h2>
        <button className="movie__icon movie__icon_is-active" aria-label="movie-icon" type="button" ></button>
      </div>
      <p className="movie__duration">1ч42м</p>
    </li>
  );
}

export default MoviesCard;
