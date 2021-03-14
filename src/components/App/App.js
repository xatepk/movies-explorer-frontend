import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import '../../index.css';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';

function App() {
  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
