import React from "react";
import { Redirect, Route } from "react-router-dom";
import Auth from '../utils/auth';

function ProtectedAuth({ component: Component, ...restOfProps }) {
    return (
      <Route
        {...restOfProps}
        render={(props:any) =>
          !Auth.loggedIn() ? <Component {...props} /> : <Redirect to='/' />
        }
      />
    );
  }
  
  export default ProtectedAuth;