import './AddMoviesButton.css';
import cn from 'classnames';

function AddMoviesButton({ movies, showMore }) {
  const { movieCards, itemsToShow, addItems } = movies;

  const showMoreMovies = () => {
    showMore(itemsToShow+addItems);
  }

  return(
    <button className={cn("addmovie__button", {"addmovie__button_is-active" : (movieCards.length > itemsToShow)})} type="submit" onClick={showMoreMovies}>Ещё</button>
  );
}

export default AddMoviesButton;
