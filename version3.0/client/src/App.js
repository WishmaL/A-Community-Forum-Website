import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Member from './pages/Member';
// import Admin from './pages/Admin';
import GreatAdmin from './pages/GreatAdmin';
import Login from './pages/Login';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import AddArticle from './pages/AddArticle';
import AddGraph from './pages/AddGraph';
import AddNotice from './pages/AddNotice';
import EditNotice from './pages/EditNotice';
import { AuthContext } from './context/Auth';
import PrivateRoute from './PrivateRoute';
import EditArticle from './pages/EditArticle';
import Admin_1 from './pages/Admin_1';
import { LogginProvider } from './context/LoggedIn';
import { RollProvider } from './context/Roll';

function App(props) {
  const existingTokens = JSON.parse(localStorage.getItem('tokens'));
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem('tokens', JSON.stringify(data));
    setAuthTokens(data);
  };

  // the parent
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [roll, setRoll] = useState('viewer');

  const callBack = (log_status) => {
    console.log('log_status:', log_status);
    setisLoggedIn(log_status);
  };

  const RollCallback = (roll) => {
    setRoll(roll);
  };

  return (
    <div>
      {/* {console.log('roll:', roll)} */}
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
        {/* <Router> */}

        <LogginProvider value={isLoggedIn}>
          <Navbar />

          <Switch>
            

            {/* ___JUST A TRY___ */}

            {/* <Route exact path="/Login" component={Login}/> */}
            <Route
              exact
              path="/Login"
              render={(props) => (
                <Login
                  {...props}
                  AppCallBack={callBack}
                  RollCallback={RollCallback}
                />
              )}
            />

            <RollProvider value={roll}>
              {/* {console.log(roll)} */}
              <Route exact path="/" component={Home} />
              {/* <Route exact path="/delthis/" component={Delthis} /> */}
              <PrivateRoute exact path="/Member/:userName" component={Member} />
              {/* <Route exact path="/Admin/:userName" component={Admin} /> */}
              <PrivateRoute exact path="/Admin/:userName" component={Admin_1} />
              <PrivateRoute
                path="/GreatAdmin/:userName"
                component={GreatAdmin}
              />
              <Route
                exact
                path="/AddArticle/:userName"
                component={AddArticle}
              />
              <Route exact path="/AddGraph/:userName" component={AddGraph} />
              <Route exact path="/AddNotice/:userName" component={AddNotice} />
              <Route
                exact
                path="/EditNotice/:userName"
                component={EditNotice}
              />
              <Route
                exact
                path="/EditArticle/:userName"
                component={EditArticle}
              />
            </RollProvider>

            <Route component={Error} />

            {/* setting up the route parameter */}
          </Switch>
        </LogginProvider>

        {/* </Router> */}
      </AuthContext.Provider>
    </div>
  );
}

export default App;
