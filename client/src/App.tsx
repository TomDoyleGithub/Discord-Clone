import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/reset.sass'
import './styles/global.scss'
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';



  

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

