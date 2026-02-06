import React from "react";
import "./Product.css";
import { useCart } from "./StateProvider"; // or "../context/CartContext"

type ProductProps = {
  id: string;
  title: string;
  price: number;
  rating: number;
  image: string;
};

function Product({ id, title, price, rating, image }: ProductProps) {
  const { dispatch } = useCart();

  const handleAdd = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id,
        title,
        price,
        image,
        rating
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>

        <p className="product__price">
          <strong>${price}</strong>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill("_")
            .map((_, i) => (
              <span key={i}>⭐</span>
            ))}
        </div>
      </div>

      <img src={image} alt="Product" />
      <button onClick={handleAdd}>Add to Basket</button>
    </div>
  );
}

export default Product;
