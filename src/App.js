import { Header } from './components/header/header.jsx';
import { Home } from "./components/home/home.jsx";
import './assets/styles/App.css'
import { Redirect, Route, Router, Switch } from 'react-router';
import { useState, useEffect } from 'react';
import { createBrowserHistory } from 'history';
import { Pending } from './components/pending/pending.jsx';
import { Accept } from './components/accept/accept.jsx';
import { Error } from './components/error/error.jsx';

const myHistory = createBrowserHistory()

function App() {
  const [error, setError] = useState()

  return (
    <div className="App">
      <Router history={myHistory}>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>

          <Route path='/pending'>
            <Pending

            />
          </Route>

          <Route path='/accept'>
            <Accept />
          </Route>

          <Route path='/error'>
            <Error />
          </Route>

          <Route path='*'>
            <Home/>
            <Redirect to='/' />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
