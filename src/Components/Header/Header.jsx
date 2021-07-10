import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

function Header({ login }) {
  console.log(login);
  return (
    <nav class="navbar navbar-light bg-dark">
      <div class="container-fluid d-flex justify-content-between">
        <div>
          <h4 className="text-light">Deals & Coupons (Icon)</h4>
          {/* <img src="" className="img-fluid" /> */}
        </div>
        <Button danger={login ? true : false}>
          <Link to="/login">{login ? "Logout" : "Login"}</Link>
        </Button>
      </div>
    </nav>
  );
}

export default Header;
