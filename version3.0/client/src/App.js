import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';


import Home from './pages/Home';
import Member from './pages/Member';
import Admin from './pages/Admin';
import GreatAdmin from './pages/GreatAdmin';
// import Signin from './pages/Signin';
import Error from './pages/Error';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/Signin/" component={Signin} /> */}
      <Route exact path="/Member/" component={Member} />
      <Route exact path="/Admin/" component={Admin} />
      <Route exact path="/GreatAdmin/" component={GreatAdmin} />
      <Route component={Error} />

      {/* setting up the route parameter */}
    </Switch>
  </div>
  );
}

export default App;
