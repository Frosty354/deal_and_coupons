import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function Header({ login }) {
  console.log(login);
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid d-flex justify-content-between">
        <div>
          <img src={logo} className="img-fluid" height="100px" width="200px" />
        </div>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
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
          </ul>
        </div>
        <Button danger={login ? true : false}>
          <Link to="/login">{login ? "Logout" : "Login"}</Link>
        </Button>
      </div>
    </nav>
  );
}

export default Header;
