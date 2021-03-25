import React, { useState, useEffect } from 'react';
import { getMovies } from '../../utils/MoviesApi';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import '../../index.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from'../NotFound/NotFound';

function App() {
  const [moviesList, setMoviesList] = useState([]);
  const [filteredList, setFilteredList] = useState({
    movieCards:[],
    itemsToShow: 12,
    addItems:4,
  });
  const [contentLoading, setContentLoading] = useState(false);
  const [badMovieRequest, setbadMovieRequest] = useState(false);
  const [emptyMoviesList, setEmptyMoviesList] = useState(false);

  useEffect(() => {
    const moviesData = JSON.parse(localStorage.getItem('moviesData'));
    if (moviesData) {
      setMoviesList(moviesData);
    } else {
      getMovies()
      .then((res) => {
        localStorage.setItem('moviesData', JSON.stringify(res));
        setMoviesList(res);
      })
      .catch((err) => {
        setbadMovieRequest(true);
      })
    }
  }, []);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setTimeout(() => {
        if (window.innerWidth < 1280 && window.innerWidth > 480) {
          setFilteredList({...filteredList, itemsToShow:8, addItems:2});
        } else if (window.innerWidth <= 480) {
          setFilteredList({...filteredList, itemsToShow:5, addItems:2});
        }
      }, 1000);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions)

  }, [filteredList]);

  const handleSeachMovie = (searchString) => {
    setFilteredList({...filteredList, movieCards:[]});
    setbadMovieRequest(false);
    setEmptyMoviesList(false);

    setContentLoading(true);
    const newList = moviesList
      .filter((movie) => movie.nameRU.toLowerCase().includes(searchString.toLowerCase()));

    // debugger;
    if (newList.length === 0) {
      setEmptyMoviesList(true);
    } else {
      setFilteredList({...filteredList, movieCards:newList});
    }
    // setTimeout(()=>setContentLoading(false), 2000);
    setContentLoading(false)
  }

  const showMore = (itemsList) => {
    setFilteredList({...filteredList, itemsToShow:itemsList});
  }

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/movies">
          <Movies handleSeachMovie={handleSeachMovie}
                  movies={filteredList}
                  contentLoading={contentLoading}
                  showMore={showMore}
                  badMovieRequest={badMovieRequest}
                  emptyMoviesList={emptyMoviesList} />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
