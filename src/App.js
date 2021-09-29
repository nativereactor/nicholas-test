import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import UsersPage from './screens/UsersTesting';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <UsersPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
