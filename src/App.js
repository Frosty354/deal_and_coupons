import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";

function App() {
  const [login, setLogin] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={(props) => <Home login={login} />} />
          <Route
            exact
            path="/signup"
            component={() => <Signup login={login} setLogin={setLogin} />}
          />
          <Route
            exact
            path="/login"
            component={() => <Login login={login} setLogin={setLogin} />}
          />
          <Route
            exact
            path="/cart"
            component={() => <Cart login={login} setLogin={setLogin} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
