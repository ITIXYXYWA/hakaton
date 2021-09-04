import { Header } from './components/header/header.jsx';
import { Home } from "./components/home/home.jsx";
import './assets/styles/App.css'
import { Route, Router, Switch, useHistory } from 'react-router';
import { useEffect } from 'react';
import { createBrowserHistory } from 'history';
import { Panding } from './components/panding/panding.jsx';

const myHistory = createBrowserHistory()

function App() {
  return (
    <div className="App">
      <Router history={myHistory}>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>

          <Route path='/pending' component={() => {
            return <Panding />
          }}>
            {/* <Panding /> */}
          </Route>

          <Route path='/accept'>

          </Route>

          <Route path='/error'>

          </Route>

          <Route path='/storage'>

          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
