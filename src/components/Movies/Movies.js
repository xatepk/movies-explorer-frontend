import './Movies.css';
import Header from '../Header/Header';
import HeaderNav from '../HeaderNav/HeaderNav';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import AddMoviesButton from '../AddMoviesButton/AddMoviesButton';
import Footer from '../Footer/Footer';

function Movies({
  handleSeachMovie,
  movies,
  contentLoading,
  showMore,
  badMovieRequest,
  emptyMoviesList,
  isLiked,
  onMovieLike,
  savedList,
  onMovieDelete
}) {

  return(
    <div className="movies">
      <Header>
        <HeaderNav />
      </Header>
      <SearchForm handleSeachMovie={handleSeachMovie} />
      {contentLoading && <Preloader />}
      <MoviesCardList
        movies={movies}
        badMovieRequest={badMovieRequest}
        emptyMoviesList={emptyMoviesList}
        isLiked={isLiked}
        onMovieLike={onMovieLike}
        savedList={savedList}
        onMovieDelete={onMovieDelete} />
      <AddMoviesButton
        movies={movies}
        showMore={showMore}/>
      <Footer />
    </div>
  );
}

export default Movies;
