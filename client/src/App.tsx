import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import './styles/reset.sass'
import './styles/global.scss'
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import ResetPassword from './pages/ResetPassword';
import ProtectedRoute from './components/ProtectedRoute';
import ProtectedAuth from './components/ProtectedAuth';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});
  

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <ProtectedRoute exact path='/' component={Home} />
          <ProtectedAuth exact path='/login' component={Login} />
          <ProtectedAuth exact path='/reset-password/:id/:token' component={ResetPassword}/>
          <ProtectedAuth exact path='/register' component={Register} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;

