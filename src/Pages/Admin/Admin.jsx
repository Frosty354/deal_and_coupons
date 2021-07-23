import React, { useState } from "react";
import { Redirect, Link, useHistory } from "react-router-dom";
import { Input, Button } from "antd";
import axios from 'axios'
function Admin({ setLogin, login }) {
  const history = useHistory();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const loginHandler = async () => {
    let flag = true;
    let data = await axios.post("http://localhost:8683/login",{
      username:user.username,
      password:user.password
    })
    console.log(data)
  
    //logic to be added here
    


    if (flag) {
      setLogin(true);
      history.push("/");
    }
  };
  
  const onChangeInputHandler = (e) => {
    console.log(e, "is e");
    //e == event
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="container d-flex justify-content-center align-items-center rounded"
    >
      <div className="col-5 shadow shadow-xl p-4 bg-light">
        <h2 className="text-info">Login Page</h2>
        <Input
          onChange={(e) => onChangeInputHandler(e)}
          name="username"
          value={user.username}
          placeholder="Username"
          className="my-4"
        />
        <Input.Password onChange={(e) => onChangeInputHandler(e)}
          name="password"
          value={user.password}
          placeholder="Password"
          className="my-4"
        />
      
        <br />
        <Button
          onClick={loginHandler}
          className="d-flex m-auto mt-2"
          type="primary"
        >
          Login
        </Button>
      </div>
    </div>
  );
}

export default Admin;
