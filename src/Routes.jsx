import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Home from './Pages/Home/Home';

function Routes({loggedIn,handleLogin}) {
    return (
        <BrowserRouter>
          <Switch>
            <Route loggedIn={loggedIn} exact path="/" component={Home} />
            <Route handleLogin={handleLogin} exact path="/signup" component={Signup} />
            <Route handleLogin={handleLogin} exact path="/login" component={Login} />
          </Switch>
      </BrowserRouter>
    )
}

export default Routes
