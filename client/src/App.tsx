import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/reset.sass'
import './styles/global.sass'
import Login from './pages/Login';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/login' component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
