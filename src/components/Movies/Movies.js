import './Movies.css';
import Header from '../Header/Header';
import HeaderNav from '../HeaderNav/HeaderNav';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import AddMoviesButton from '../AddMoviesButton/AddMoviesButton';
import Footer from '../Footer/Footer';

function Movies({ handleSeachMovie, movies }) {
  return(
    <div className="movies">
      <Header>
        <HeaderNav />
      </Header>
      <SearchForm handleSeachMovie={handleSeachMovie} />
      <MoviesCardList movies={movies} />
      <AddMoviesButton />
      <Footer />
    </div>
  );
}

export default Movies;
