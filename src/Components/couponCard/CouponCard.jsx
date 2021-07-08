import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";

function CouponCard() {
  const { Meta } = Card;
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
      <button>
        Add TO Cart
        <Link to="/login" />
      </button>
    </Card>
  );
}

export default CouponCard;
