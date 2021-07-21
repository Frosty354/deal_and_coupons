import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function Header({ login }) {
  console.log(login);
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <img src={logo} className="img-fluid" height="100px" width="200px" />
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <Link to="/" class="nav-link">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/giftcard" class="nav-link">
              Gift Cards
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/about" class="nav-link">
              About Us
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/cart" class="nav-link">
              Cart
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/admin" class="nav-link">
              Admin
            </Link>
          </li>
        </ul>
        <Button
          style={{ marginLeft: "auto", marginRight: "2%" }}
          danger={login ? true : false}
        >
          <Link to="/login">{login ? "Logout" : "Login"}</Link>
        </Button>
      </div>
    </nav>
  );
}

export default Header;
