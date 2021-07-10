import React from "react";
import { Redirect, Link } from "react-router-dom";
import { Input, Button, Space } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

function SignUp() {
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="container d-flex justify-content-center align-items-center rounded"
    >
      <div className="col-5 shadow shadow-xl p-4">
        <h2 className="text-info">SignUp Page</h2>
        <Input placeholder="email" className="my-2" />
        <Input placeholder="username" className="my-2" />
        <Input.Password className="my-2" placeholder="input password" />
        <Input.Password
          className="my-2"
          placeholder="confirm password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
        <small>
          Already Singned Up ? click
          <span>
            <Link to="/login">Here</Link>
          </span>
          to Log in.
        </small>
        <Button type="primary">
          <Link to="/login">Sign Up</Link>
        </Button>
      </div>
    </div>
  );
}

export default SignUp;
