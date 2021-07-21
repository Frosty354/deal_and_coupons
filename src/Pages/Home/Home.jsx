import React, { useEffect, useState } from "react";
import CouponCard from "../../Components/couponCard/CouponCard";
import { Button } from "antd";
import Header from "../../Components/Header/Header";
import GiftCard from "../../Components/giftCard/GiftCard";
import axios from "axios";

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
const BASE_URL = "http://localhost:8999";
function Home({ login, addToCart, isGiftCard }) {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/coupons/all`)
      .then((res) => {
          console.log(res);

        setAllProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/giftcards/all`)
      .then((res) => {
          console.log(res);

        setAllProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <div>
      <Header login={login} />
      <div className="container d-flex col-12 flex-wrap ">
        {isGiftCard &&
          allProducts.map((ele) => {
            return (
              <div className="col-md-3">
                <GiftCard
                  addToCart={addToCart}
                  title={ele.gifttype}
                  desc={ele.giftdesc}
                  price={ele.price}
                  id={ele._id}
                  login={login}
                  type={ele.type}
                />
              </div>
            );
          })}
        {!isGiftCard &&
          allProducts.map((ele) => {
            return (
              <div className="col-md-3">
                <CouponCard
                  title={ele.coupontype}
                  desc={ele.coupondesc}
                  code={ele.couponcode}
                  id={ele._id}
                  image={ele.image}
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
