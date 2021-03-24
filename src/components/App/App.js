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
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    getMovies().then((res) => {
      setMoviesList(res);
    }, [])
  })

  const handleSeachMovie = (searchString) => {
    const newList = moviesList.filter((movie) =>
                                  movie.nameRU.toLowerCase().includes(searchString.toLowerCase()));

    debugger;
    setFilteredList(newList);
  }

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/movies">
          <Movies handleSeachMovie={handleSeachMovie}
                  movies={filteredList} />
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
