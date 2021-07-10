import React from "react";
import CouponCard from "../../Components/couponCard/CouponCard";
import { Button } from "antd";
import Header from "../../Components/Header/Header";

function Home({ login, ...rest }) {
  console.log(rest, "is reset");
  console.log(login, "guigiu");
  return (
    <div>
      <Header login={login} />
      <div className="container d-flex col-12 flex-wrap ">
        <div className="col-md-3">
          <CouponCard title="some title" desc="some desc" login={login} />
        </div>
        <div className="col-md-3">
          <CouponCard title="some title" desc="some desc" login={login} />
        </div>
        <div className="col-md-3">
          <CouponCard title="some titlec 2" desc="some desc" login={login} />
        </div>
        <div className="col-md-3">
          <CouponCard title="some title 3" desc="some desc" login={login} />
        </div>
        <div className="col-md-3">
          <CouponCard title="some title 3" desc="some desc" login={login} />
        </div>
      </div>
    </div>
  );
}

export default Home;
