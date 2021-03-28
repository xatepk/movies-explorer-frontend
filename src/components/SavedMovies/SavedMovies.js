import './SavedMovies.css';
import Header from '../Header/Header';
import HeaderNav from '../HeaderNav/HeaderNav';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';

function SavedMovies({
  savedList,
  handleSeachMovie,
  contentLoading,
  badMovieRequest,
  emptyMoviesList,
  onMovieDelete,
  requestStatus,
}) {

  return(
    <section className="saved-movies">
      <Header>
        <HeaderNav />
      </Header>
      <SearchForm
        handleSeachMovie={handleSeachMovie} />
      {contentLoading && <Preloader />}
      <MoviesCardList
        movies={savedList}
        savedList={savedList.movieCards}
        isSaved={true}
        badMovieRequest={badMovieRequest}
        emptyMoviesList={emptyMoviesList}
        onMovieDelete={onMovieDelete}
        requestStatus={requestStatus}
        />
      <Footer />
    </section>
  );
}

export default SavedMovies;
