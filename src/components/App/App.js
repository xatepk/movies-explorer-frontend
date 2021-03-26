import React, { useState, useEffect } from 'react';
import { getMovies } from '../../utils/MoviesApi';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import '../../index.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from'../NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute';
import * as auth from '../../utils/MainApi';

function App() {
  const [moviesList, setMoviesList] = useState([]);
  const [filteredList, setFilteredList] = useState({
    movieCards:[],
    itemsToShow: 12,
    addItems:4,
  });
  const [contentLoading, setContentLoading] = useState(false);
  const [badMovieRequest, setBadMovieRequest] = useState(false);
  const [emptyMoviesList, setEmptyMoviesList] = useState(false);
  const [token, setToken] = useState('');
  const [loggedIn, setloggedIn] = useState(false);
  const [badRequest, setBadRequest] = useState(false);

  const history = useHistory();

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
        setBadMovieRequest(true);
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
    setBadMovieRequest(false);
    setEmptyMoviesList(false);

    setContentLoading(true);
    const newList = moviesList
      .filter((movie) => movie.nameRU.toLowerCase().includes(searchString.toLowerCase()));

    if (newList.length === 0) {
      setEmptyMoviesList(true);
    } else {
      setFilteredList({...filteredList, movieCards:newList});
    }
    setContentLoading(false)
  }

  const showMore = (itemsList) => {
    setFilteredList({...filteredList, itemsToShow:itemsList});
  }

  const handleRegister = ({ email, password, name }) => {
    auth.register(password, email, name)
    .then((res) => {
      handleLogin({ email, password });
    })
    .catch((err) => {
      debugger;
      setBadRequest(true);
    });
  }

  const handleLogin = ({ email, password }) => {
    debugger;
    auth.authorize(email, password)
    .then((data) => {
    if (data.token){
      setToken(data.token);
      setloggedIn(true);
      history.push('/movies');
    }
  })
    .catch(err => console.log(err));
  }

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <ProtectedRoute
          path="/movies"
          component={Movies}
          handleSeachMovie={handleSeachMovie}
          movies={filteredList}
          contentLoading={contentLoading}
          showMore={showMore}
          badMovieRequest={badMovieRequest}
          emptyMoviesList={emptyMoviesList} />
        <ProtectedRoute
          path="/saved-movies"
          component={SavedMovies} />
        <ProtectedRoute
          path="/profile"
          component={Profile} />
        <Route path="/signup">
          <Register
            handleRegister={handleRegister}
            badRequest={badRequest} />
        </Route>
        <Route path="/signin">
          <Login
            handleLogin={handleLogin} />
        </Route>
        <Route path="">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
