import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';


import Home from './pages/Home';
import Member from './pages/Member';
import Admin from './pages/Admin';
import GreatAdmin from './pages/GreatAdmin';
import Login from './pages/Login';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import AddArticle from './pages/AddArticle';
// import Delthis from './components/Delthis';

function App() {
  return (
    <div>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Login" component={Login} />

      {/* <Route exact path="/delthis/" component={Delthis} /> */}
      <Route exact path="/Member/:userName" component={Member} />
      <Route exact path="/Admin/:userName" component={Admin} />
      <Route exact path="/GreatAdmin/:userName" component={GreatAdmin} />
      <Route exact path="/AddArticle/:userName" component={AddArticle} />
      <Route component={Error} />

      {/* setting up the route parameter */}
    </Switch>
  </div>
  );
}

export default App;
