import './MoviesCard.css';
import movieImg from '../../images/_movie.svg';

function MoviesCard({ movie, onMovieLike }) {

  const movieImage = ((movie.image) ? `https://api.nomoreparties.co${movie.image.url}` : movieImg);

  const getTimeFromMins = (mins) => {
    let hours = Math.trunc(mins/60);
	  let minutes = mins % 60;
	  return hours + 'ч' + minutes + 'м';
  };

  return(
    <li className="movie">
      <img className="movie__image" alt="movie" src={movieImage} />
      <div className="movie__description">
        <h2 className="movie__name">{movie.nameRU}</h2>
        <button className="movie__icon movie__icon_is-active" aria-label="movie-icon" type="button" ></button>
      </div>
      <p className="movie__duration">{getTimeFromMins(movie.duration)}</p>
    </li>
  );
}

export default MoviesCard;
