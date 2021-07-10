import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

function CouponCard({ login, title, desc }) {
  const history = useHistory();
  const { Meta } = Card;
  const handleAddToCart = () => {
    if (login) {
      history.push("/cart");
    } else {
      swal("Error", "You Have not logged In yet", "Error");
    }
  };
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src="https://source.unsplash.com/random" />}
    >
      <Meta title={title} description={desc} />
      <button onClick={handleAddToCart}>
        Add TO Cart
        <Link to="/login" />
      </button>
    </Card>
  );
}

export default CouponCard;
