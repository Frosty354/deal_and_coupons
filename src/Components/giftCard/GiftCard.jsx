import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

function GiftCard({ login, title, desc, addToCart, type }) {
  const { Meta } = Card;
  const handleAddToCart = () => {
    if (!login) {
      swal("Error", "You Have Not logged In Yet", "error");
      return;
    }
    addToCart({
      title,
      desc,
      type,
    });
    swal("Success", "Added TO Cart", "success");
  };
  return (
    <Card
      hoverable
      className="my-5"
      style={{ width: 240 }}
      cover={<img alt="example" src="https://via.placeholder.com/150" />}
    >
      <Meta title={title} description={desc} />
      <button className="btn btn-success mt-4" onClick={handleAddToCart}>
        Add To Cart
      </button>
    </Card>
  );
}

export default GiftCard;
