import React, { useEffect, useState} from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

function CouponCard({ login, title, desc, code,image }) {
  const history = useHistory();
  const { Meta } = Card;
  const handleShowCoupon = () => {
    if (login) {
      swal(code, "Yaay! you got your coupon code", "success");
    } else {
      swal("Error", "You must login first to view the code", "error");
      history.push("/login");
    }
  };

  console.log(image);
  return (
    <Card
      hoverable
      className="my-5"
      style={{ width: 240 }}
      cover={<img alt="example" src={`${image || "https://via.placeholder.com/150" }`} />}
    >
      <Meta title={title} description={desc} />
      <button className="btn btn-success mt-4" onClick={handleShowCoupon}>
        Show Code
      </button>
    </Card>
  );
}

export default CouponCard;
