import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies }) {
  return(
    <section className="movies__block">
      <ul className="movies__list">
        {movies.map((movie) => (
          <MoviesCard key={movie.id}
                      movie={movie} />)
        )}
      </ul>
    </section>
  );
}

export default MoviesCardList;
