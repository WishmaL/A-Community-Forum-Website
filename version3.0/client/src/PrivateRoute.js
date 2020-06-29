import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from "./context/Auth";

function PrivateRoute({ component: Component, ...rest }) {
    const { authTokens } = useAuth();
  
  return(
    <Route {...rest} render={(props) => (
        authTokens  ? (
            <Component {...props} />
          ) : (
            // <Redirect to={{ pathname: "/Login", state: { referer: props.location } }}
            <Redirect to={{ pathname: "/" }}/>
          )
    )}
    />
  );
}

export default PrivateRoute;