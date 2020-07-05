import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Member from './pages/Member';
import Admin from './pages/Admin';
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

function App(props) {
  
  const existingTokens = JSON.parse(localStorage.getItem('tokens'));
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem('tokens', JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <div>
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
        {/* <Router> */}
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Login" component={Login} />

            {/* <Route exact path="/delthis/" component={Delthis} /> */}
            <Route exact path="/Member/:userName" component={Member} />
            <Route exact path="/Admin/:userName" component={Admin} />
            <PrivateRoute path="/GreatAdmin/:userName" component={GreatAdmin} />
            <Route exact path="/AddArticle/:userName" component={AddArticle} />
            <Route exact path="/AddGraph/:userName" component={AddGraph} />
            <Route exact path="/AddNotice/:userName" component={AddNotice} />
            <Route exact path="/EditNotice/:userName" component={EditNotice} />
            <Route component={Error} />

            {/* setting up the route parameter */}
          </Switch>
        {/* </Router> */}
      </AuthContext.Provider>
    </div>
  );
}

export default App;
