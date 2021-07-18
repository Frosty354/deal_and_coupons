import React, { useState } from "react";
import { Redirect, Link, useHistory } from "react-router-dom";
import { Input, Button, Space } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

function SignUp() {
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const signUpHandler = () => {
    // login to be added here
    let flag = true;
    //logic to be added here
    if (flag) {
      history.push("/login");
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
        <h2 className="text-info">SignUp Page</h2>
        <Input
          onChange={(e) => onChangeInputHandler(e)}
          name="email"
          value={user.email}
          placeholder="email"
          className="my-2"
        />
        <Input.Password className="my-2" placeholder="input password" />
        <Input.Password
          className="my-2"
          placeholder="confirm password"
          name="password"
          value={user.password}
          onChange={(e) => onChangeInputHandler(e)}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
        <small>
          Already Singned Up ? click
          <span>
            <Link to="/login"> here </Link>
          </span>
          to Log in.
        </small>
        <Button
          onClick={signUpHandler}
          className="d-flex m-auto mt-2"
          type="primary"
        >
          Signup
        </Button>
      </div>
    </div>
  );
}

export default SignUp;
