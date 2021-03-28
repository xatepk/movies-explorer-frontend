import './SavedMovies.css';
import Header from '../Header/Header';
import HeaderNav from '../HeaderNav/HeaderNav';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';

function SavedMovies({ savedList }) {

  return(
    <section className="saved-movies">
      <Header>
        <HeaderNav />
      </Header>
      <SearchForm />
      <MoviesCardList
        movies={savedList}
        savedList={savedList.movieCards}
        isSaved={true}
        />
      <Footer />
    </section>
  );
}

export default SavedMovies;
