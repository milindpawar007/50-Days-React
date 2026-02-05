import React from "react";
import "./Product.css";

type ProductProps = {
  id: string;
  title: string;
    price: number;
    rating: number;
    image: string;
};

function Product({ id, title, price, rating, image }: ProductProps) {
  return (
    
      <div className="product" key={id}>
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">{price}$</p>
          <div className="product__rating"> {
            Array(rating).fill('_').map((_,i)=><span>⭐</span>)
            
            }</div>
        </div>
        <img
          src={image}   
          alt="Product Imagee"
        />
        <button>Add to Basket</button>
    </div>
  );
}

export default Product;
