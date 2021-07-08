import React,{useState} from 'react'
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Signup from "../../Components/Signup/Signup";

function App() {
  const [login,setLogin] = useState(false)
  const [coupons,setCoupons] = useState([])
  const [addedCoupons,setAddedCoupons]= useState([])

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
