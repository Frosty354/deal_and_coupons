import React from "react";
import { Redirect, Link } from "react-router-dom";
import { Input, Button } from "antd";

function Login({ handleLogin }) {
  const handleLoginClick = () => {
    // add your validation here, if success set login true else show error
    handleLogin(true);
  };
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="container d-flex justify-content-center align-items-center rounded"
    >
      <div className="col-5 shadow shadow-xl p-4">
        <h2 className="text-info">Login Page</h2>
        <Input placeholder="username" className="my-4" />
        <Input.Password placeholder="password" className="my-4" />
        <Button onClick={handleLoginClick} type="primary">
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
