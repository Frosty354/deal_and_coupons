import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Home from "./Pages/Home/Home";

function Routes({ loggedIn, handleLogin }) {
  console.log(loggedIn, "is login");
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <Home loggedIn={loggedIn} />} />
        <Route
          handleLogin={handleLogin}
          exact
          path="/signup"
          component={() => <Signup handleLogin={handleLogin} />}
        />
        <Route
          handleLogin={handleLogin}
          exact
          path="/login"
          component={() => <Login handleLogin={handleLogin} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
