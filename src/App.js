import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import About from "./Pages/About/About";

function App() {
  const [login, setLogin] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <Home login={login} />} />
          <Route exact path="/giftcard" component={Home} />
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
            path="/about"
            component={() => <About login={login} setLogin={setLogin} />}
          />
          <Route
            exact
            path="/cart"
            component={() => <Cart login={login} setLogin={setLogin} />}
          />
        </Switch>
      </BrowserRouter>
      <hr />
      <h2 className="text-light text-center">THIS IS THE FOOTER PAGE</h2>
    </div>
  );
}

export default App;
