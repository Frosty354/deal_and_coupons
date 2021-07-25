import React, { useEffect, useState } from "react";
import CouponCard from "../../Components/couponCard/CouponCard";
import { Button } from "antd";
import Header from "../../Components/Header/Header";
import GiftCard from "../../Components/giftCard/GiftCard";
import axios from "axios";


const BASE_URL = "http://localhost:8999";
function Home({ login, addToCart, isGiftCard }) {
  const [allProducts, setAllProducts] = useState([]);

  let url
  if(isGiftCard)
  {
    url="/giftcards/all"
  }
  else{
    url="/coupons/all"
  }

  useEffect(() => {
    axios
      .get(`${BASE_URL}${url}`)
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
                  image={ele.image}
                  id={ele.giftid}
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
                  id={ele.giftid}
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
