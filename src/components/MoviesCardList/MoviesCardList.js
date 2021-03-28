import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({
  movies,
  badMovieRequest,
  emptyMoviesList,
  onMovieLike,
  savedList,
  onMovieDelete,
}) {
  const { movieCards=savedList, itemsToShow=savedList.length } = movies;

  return(
    <section className="movies__block">
      {badMovieRequest && <p className="movies__message">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>}
      {emptyMoviesList && <p className="movies__message">Ничего не найдено</p>}
      <ul className="movies__list">
        {movieCards
          .map((movie, idx) => {
            if (idx < itemsToShow) {
              return (
                <MoviesCard
                  key={movie.id}
                  movie={movie}
                  onMovieLike={onMovieLike}
                  savedList={savedList}
                  onMovieDelete={onMovieDelete}
                />
              );
            }
            return null;
        })}
      </ul>
    </section>
  );
}

export default MoviesCardList;
