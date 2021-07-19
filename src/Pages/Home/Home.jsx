import React from "react";
import CouponCard from "../../Components/couponCard/CouponCard";
import { Button } from "antd";
import Header from "../../Components/Header/Header";
import GiftCard from "../../Components/giftCard/GiftCard";

const tempGiftCardData = [
  {
    id: 1,
    title: "amazon 100rs gift card",
    desc: "",
    type: "Amazon",
  },
  {
    id: 2,
    title: "amazon 500rs gift card",
    desc: "",
    type: "Flipkart",
  },
  {
    id: 3,
    title: "amazon 1000rs gift card",
    desc: "",
    type: "Amazon",
  },
  {
    id: 4,
    title: "Swiggy 1000rs gift card",
    desc: "",
    type: "Swiggy",
  }, {
    id: 4,
    title: "Zomato 1000rs gift card",
    desc: "",
    type: "Zomato",
  },
];
const tempCouponData = [
  {
    id: 1,
    title: "Swiggy 40% off",
    desc: "Swiggy 50",
    code: "swiggy-40",
  },
  {
    id: 2,
    title: "Swiggy Off",
    desc: "Buy one get on free",
    code: "swiggy-free",
  },
  {
    id: 3,
    title: "Rapido- first free ride",
    desc: "Free ride",
    code: "rapid-50",
  },
  {
    id: 4,
    title: "Uber : 50% off, first ride ",
    desc: "Uber 50",
    code: "Get-Cab",
  },
];

function Home({ login, addToCart, isGiftCard }) {
  return (
    <div>
      <Header login={login} />
      <div className="container d-flex col-12 flex-wrap ">
        {isGiftCard &&
          tempGiftCardData.map((ele) => {
            return (
              <div className="col-md-3">
                <GiftCard
                  addToCart={addToCart}
                  title={ele.title}
                  desc={ele.desc}
                  id={ele.id}
                  login={login}
                  type={ele.type}
                />
              </div>
            );
          })}
        {!isGiftCard &&
          tempCouponData.map((ele) => {
            return (
              <div className="col-md-3">
                <CouponCard
                  title={ele.title}
                  desc={ele.desc}
                  code={ele.code}
                  id={ele.id}
                  login={login}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Home;
