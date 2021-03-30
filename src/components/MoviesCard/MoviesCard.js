import './MoviesCard.css';
import React, { useState, useEffect } from 'react';
import movieImg from '../../images/_movie.svg';
import cn from 'classnames';
import InfoTooltip from '../InfoTooltip/InfoTooltip';


function MoviesCard({
  movie,
  onMovieLike,
  savedList,
  onMovieDelete,
  isSaved,
  requestStatus,
}) {

  const [isLiked, setIsLiked] = useState(false);

  const movieImage = (movie) => {
    if (movie.image) {
      if (movie.image.url) {
        return `https://api.nomoreparties.co${movie.image.url}`
      } else if (movie.image) {
        return movie.image
      }
    }

    return movieImg;
  }

  const movieTrailerLink = (movie.trailerLink ? movie.trailerLink : "https://www.youtube.com/")

  useEffect(()=>{
    setIsLiked(savedList.some(i => i.movieId === movie.id));
  }, [movie.id, savedList]);

  const handleLikeClick = () => {
    if (isLiked) {
      debugger;
      onMovieDelete(savedList.find(i => i.movieId === movie.id));
    } else if (isSaved) {
      onMovieDelete(movie);
    } else {
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
    <>
      <li className="movie">
        <a target='_blank' href={movieTrailerLink} ><img className="movie__image" alt="movie" src={movieImage(movie)} /></a>
        <div className="movie__description">
          <h2 className="movie__name">{movie.nameRU}</h2>
          <button className={cn("movie__icon", {"movie__icon_is-active" : isLiked}, {"movie__icon_is-close" : isSaved})} aria-label="movie-icon" type="button" onClick={handleLikeClick}></button>
        </div>
        <p className="movie__duration">{getTimeFromMins(movie.duration)}</p>
      </li>
      <InfoTooltip requestStatus={requestStatus} />
    </>
  );
}

export default MoviesCard;
