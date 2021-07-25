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
import Admin from "./Pages/Admin/Admin";

function App() {
  const [login, setLogin] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [admin, setAdmin] = useState(false);

  const authHandler = (flag) => {
    if (flag) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  const adminHandler = (flag) => {
    if (flag) {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  };
  console.log(cartData);
  const handleAddToCart = (item) => {
    setCartData([...cartData, item]);
  };

  const handleRemoveCart = (id) => {
   console.log(id);
   let filteredCart = cartData.filter((ele)=>ele.id !== id)
   console.log(filteredCart);
   setCartData(filteredCart); 
  };


  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <Home login={login} />} />
          <Route
            exact
            path="/giftcard"
            component={() => (
              <Home login={login} addToCart={handleAddToCart} isGiftCard />
            )}
          />
          <Route
            exact
            path="/signup"
            component={() => <Signup login={login} setLogin={authHandler} />}
          />
          <Route
            exact
            path="/login"
            component={() => <Login login={login} setLogin={authHandler} />}
          />
          <Route
            exact
            path="/about"
            component={() => <About login={login} />}
          />
          <Route
            exact
            path="/cart"
            component={() => (
              <Cart
                removeCart={ handleRemoveCart}
                login={login}
                setLogin={setLogin}
                data={cartData}
              />
            )}
          />
          <Route
            exact
            path="/admin"
            component={() => <Admin login={login}  setLogin={authHandler} isAdmin/>}
          />



        </Switch>
      </BrowserRouter>
      <hr />
      
    </div>
  );
}

export default App;
