import React, { useState } from "react";
import { Redirect, Link, useHistory } from "react-router-dom";
import { Input, Button } from "antd";

function Login({ setLogin, login }) {
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const loginHandler = () => {
    let flag = true;
    //logic to be added here
    if (flag) {
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
          name="email"
          value={user.email}
          placeholder="username"
          className="my-4"
        />
        <Input.Password
          onChange={(e) => onChangeInputHandler(e)}
          name="password"
          value={user.password}
          placeholder="password"
          className="my-4"
        />
        <small>
          Not Signed Up Yet ? click
          <span>
            <Link to="/signup"> here </Link>
          </span>
          to Sign Up
        </small>
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

export default Login;
