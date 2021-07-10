import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { Input, Button } from "antd";

function Login({ setLogin, login }) {
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="container d-flex justify-content-center align-items-center rounded"
    >
      <div className="col-5 shadow shadow-xl p-4">
        <h2 className="text-info">Login Page</h2>
        <Input placeholder="username" className="my-4" />
        <Input.Password placeholder="password" className="my-4" />
        <small>
          Not Signed Up Yet ? click
          <span>
            <Link to="/signup">Here</Link>
          </span>
          to Sign Up
        </small>
        <Button onClick={setLogin(true)} type="primary">
          <Link to="/">Login</Link>
        </Button>
      </div>
    </div>
  );
}

export default Login;
