import './SavedMovies.css';
import Header from '../Header/Header';
import HeaderNav from '../HeaderNav/HeaderNav';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import AddMoviesButton from '../AddMoviesButton/AddMoviesButton';
import Footer from '../Footer/Footer';

function SavedMovies() {
  return(
    <section className="saved-movies">
      <Header>
        <HeaderNav />
      </Header>
      <SearchForm />
      <MoviesCardList />
      <AddMoviesButton />
      <Footer />
    </section>
  );
}

export default SavedMovies;
