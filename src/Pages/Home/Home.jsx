import React from "react";
import CouponCard from "../../Components/couponCard/CouponCard";
import { Button } from "antd";

function Home({ loggedIn }) {
  return (
    <div>
      <nav class="navbar navbar-light bg-dark">
        <div class="container-fluid d-flex justify-content-between">
          <img src="" alt="" width="30" height="24" />
          <Button danger={loggedIn ? true : false}>
            {loggedIn ? "Signout" : "Sign In"}
          </Button>
        </div>
      </nav>
      <CouponCard />
    </div>
  );
}

export default Home;
