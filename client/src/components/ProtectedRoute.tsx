import React from "react";
import { Redirect, Route } from "react-router-dom";
import Auth from '../utils/auth';

function ProtectedRoute({ component: Component, ...restOfProps }) {
    return (
      <Route
        {...restOfProps}
        render={(props) =>
          Auth.loggedIn() ? <Component {...props} /> : <Redirect to='/login' />
        }
      />
    );
  }
  
  export default ProtectedRoute;