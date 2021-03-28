import './MoviesCard.css';
import React, { useState, useEffect } from 'react';
import movieImg from '../../images/_movie.svg';
import cn from 'classnames';
// import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function MoviesCard({ movie, onMovieLike, savedList, onMovieDelete }) {

  const [isLiked, setIsLiked] = useState(false);
  const movieImage = ((movie.image) ? `https://api.nomoreparties.co${movie.image.url}` : movieImg);

  useEffect(()=>{
    setIsLiked(savedList.some(i => i.movieId === movie.id));
  }, [movie.id, savedList]);

  const handleLikeClick = () => {
    if (isLiked) {
      onMovieDelete(savedList.find(i => i.movieId === movie.id));
    } else {
      debugger;
      onMovieLike(movie);
    }
    setIsLiked(savedList.some(i => i.movieId === movie.id));
  }


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
        <button className={cn("movie__icon", {"movie__icon_is-active" : isLiked})} aria-label="movie-icon" type="button" onClick={handleLikeClick}></button>
      </div>
      <p className="movie__duration">{getTimeFromMins(movie.duration)}</p>
    </li>
  );
}

export default MoviesCard;
