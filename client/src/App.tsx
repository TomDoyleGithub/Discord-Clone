import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/reset.sass'
import './styles/global.scss'
import Login from './pages/Login';
import Register from './pages/Register';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyCPeGT3Hz2_DG7x5K1gE-Bw1o1eg383EmQ",
  authDomain: "discord-punkinut.firebaseapp.com",
  projectId: "discord-punkinut",
  storageBucket: "discord-punkinut.appspot.com",
  messagingSenderId: "1091788640272",
  appId: "1:1091788640272:web:435668d5eee9701310fa95",
  measurementId: "G-N1DH7BK1BY"
});

function App() {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

