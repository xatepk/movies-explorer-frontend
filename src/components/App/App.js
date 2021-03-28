import React, { useState, useEffect, useCallback } from 'react';
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
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const ListTypes = {
  Filtered: 'Filtered',
  Saved: 'Saved',
}

function App() {
  const [moviesList, setMoviesList] = useState([]);
  const [moviesSavedList, setMoviesSavedList] = useState([]);
  const [filteredList, setFilteredList] = useState({
    movieCards:[],
    itemsToShow: 12,
    addItems:4,
  });
  const [savedList, setSavedList] = useState({
    movieCards:[],
    itemsToShow: 0,
  });
  const [contentLoading, setContentLoading] = useState(false);
  const [badMovieRequest, setBadMovieRequest] = useState(false);
  const [emptyMoviesList, setEmptyMoviesList] = useState(false);
  const [token, setToken] = useState('');
  const [loggedIn, setloggedIn] = useState(false);
  const [badRequest, setBadRequest] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [requestStatus, setRequestStatus] = useState({error: false, message: ''});
  const [newMovie, setNewMovie] = useState([]);

  const history = useHistory();

  useEffect( () => {
    if (loggedIn) {
      auth.getInitialUsers(token)
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }, [loggedIn, token]);

  const handleTokenCheck = useCallback(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt){
      setToken(jwt);
      auth.getContent(jwt).then((res) => {
        if (res){
          setloggedIn(true);
          if (history) {
            history.push("/movies");
          }
        }
     });
    }
  }, [history]);

  useEffect(() => {
    handleTokenCheck();
  },[handleTokenCheck, loggedIn]);

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

  useEffect( () => {
    if (loggedIn) {
      auth.getSavedMovies(token)
      .then((movies) => {
        setMoviesSavedList(movies);
        setSavedList({...savedList, movieCards: movies, itemsToShow: movies.length});
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }, [loggedIn, newMovie, savedList, token]);

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


  const searchResults = (a, b) =>
  typeof a === 'string' && typeof b === 'string'
    ? a.toLowerCase().includes(b.toLowerCase()) : [];

  const SHORT_TRACK_DURATION = 40;
  const handleContinue = (movies, listType, arr, searchString, isShort = false) => {
    setBadMovieRequest(false);
    setEmptyMoviesList(false);

    setContentLoading(true);

    const newList = arr
      .filter(({ nameRU, duration }) => isShort
       ? duration <= SHORT_TRACK_DURATION && searchResults(nameRU, searchString)
       : searchResults(nameRU, searchString)
      );

    if (newList.length === 0) {
      setEmptyMoviesList(true);
    } else {
      const setFunc = listType === ListTypes.Filtered ? setFilteredList : setSavedList;
      setFunc({...movies, movieCards: newList});
    }
    setContentLoading(false)
  }

  const handleSeachMovie = (searchString, isShort) => {
    setFilteredList({...filteredList, movieCards: []});
    handleContinue(filteredList, ListTypes.Filtered, moviesList, searchString, isShort);
  }

  const handleSeachSavedMovie = (searchString, isShort) => {
    setSavedList({...savedList, movieCards: []});
    handleContinue(savedList, ListTypes.Saved, moviesSavedList, searchString, isShort);
  }

  const showMore = (itemsList) => {
    setFilteredList({...filteredList, itemsToShow: itemsList});
  }

  const handleRegister = ({ email, password, name }) => {
    auth.register(password, email, name)
    .then((res) => {
      handleLogin({ email, password });
    })
    .catch(() => {
      setBadRequest(true);
    });
  }

  const handleLogin = ({ email, password }) => {
    auth.authorize(email, password)
    .then((data) => {
    if (data.token){
      setToken(data.token);
      setloggedIn(true);
    }
  })
    .catch(() => {
      setBadRequest(true);
    });
  }

  const signOut = () => {
    localStorage.removeItem('jwt');
    setloggedIn(false);
    history.push('/');
  }

  const handleUpdateUser = (userInfo) => {
    auth.saveUserInfo(userInfo, token)
    .then((result) => {
      setCurrentUser(result);
      setRequestStatus({...requestStatus, message:"Данные успешно обновлены!"});
    })
    .catch(() => {
      setRequestStatus({...requestStatus, error:true, message:"Что-то пошло не так! Попробуйте еще раз."});
    });
    setTimeout(() => setRequestStatus({...requestStatus, error:false, message:""}), 1500);
  }

  const handleMovieStatus = (movie) => {
      auth.savedMovie(movie, token)
      .then((newMovie) => {
        setNewMovie(newMovie);
      })
      .catch((err) => {
        setRequestStatus({...requestStatus, error:true, message:"Что-то пошло не так! Попробуйте еще раз."});
      });
    setTimeout(() => setRequestStatus({...requestStatus, error:false, message:""}), 1500);
  }

  function handleMovieDelete(movie) {
    auth.delMovie(movie._id, token)
    .then((newMovie) => {
      setNewMovie(newMovie);
    })
    .catch((err) => {
      setRequestStatus({...requestStatus, error:true, message:"Что-то пошло не так! Попробуйте еще раз."});
    });
    setTimeout(() => setRequestStatus({...requestStatus, error:false, message:""}), 1500);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
        <Switch>
          <Route exact path="/">
            <Main loggedIn={loggedIn} />
          </Route>
          <ProtectedRoute
            path="/movies"
            loggedIn={loggedIn}
            component={Movies}
            handleSeachMovie={handleSeachMovie}
            movies={filteredList}
            contentLoading={contentLoading}
            showMore={showMore}
            badMovieRequest={badMovieRequest}
            emptyMoviesList={emptyMoviesList}
            onMovieLike={handleMovieStatus}
            onMovieDelete={handleMovieDelete}
            savedList={savedList.movieCards}
            requestStatus={requestStatus} />
          <ProtectedRoute
            path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMovies}
            onMovieDelete={handleMovieDelete}
            savedList={savedList}
            handleSeachMovie={handleSeachSavedMovie}
            contentLoading={contentLoading}
            badMovieRequest={badMovieRequest}
            emptyMoviesList={emptyMoviesList}
            requestStatus={requestStatus} />
          <ProtectedRoute
            path="/profile"
            onUpdateUser={handleUpdateUser}
            loggedIn={loggedIn}
            component={Profile}
            signOut={signOut}
            requestStatus={requestStatus} />
          <Route path="/signup">
            <Register
              handleRegister={handleRegister}
              badRequest={badRequest} />
          </Route>
          <Route path="/signin">
            <Login
              handleLogin={handleLogin}
              badRequest={badRequest} />
          </Route>
          <Route path="">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
