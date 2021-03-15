import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import AddMoviesButton from '../AddMoviesButton/AddMoviesButton';
import Footer from '../Footer/Footer';

function Movies() {
  return(
    <div className="movies">
      <Header />
      <SearchForm />
      <MoviesCardList />
      <AddMoviesButton />
      <Footer />
    </div>
  );
}

export default Movies;
