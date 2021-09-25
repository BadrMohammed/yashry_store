import React from "react";
import { Card } from "reactstrap";
import Rating from "@mui/material/Rating";

const ProductCard = ({ product }) => {
  return (
    <Card className="product_card card_item">
      <div>
        <img
          src={product.image}
          className="full_image"
          alt="img"
          style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
        />
      </div>
      <div className="text-center mt-2">
        <span style={{ fontWeight: "bold" }}>{product.name}</span>
      </div>
      <div className="text-center mt-2">
        <Rating name="simple-controlled" value={product.rating} readOnly />
      </div>
      <div className="text-center mt-1 mb-2">
        <span>{product.currency + " " + product.price}</span>
      </div>
    </Card>
  );
};

export default ProductCard;
