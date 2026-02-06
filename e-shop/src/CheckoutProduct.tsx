import React from 'react'
import "./CheckoutProduct.css";
import { useCart } from './StateProvider';
// import { useStateValue } from "./StateProvider";

type CheckoutProductProp={
    id: string;
    title: string;
    price: number;
    rating: number;
    image: string;
    qty:number
}

function CheckoutProduct({ id, image, title, price, rating,qty }:CheckoutProductProp) {
      const {   dispatch, } = useCart();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: id,
        })
    }
    const increaseQty = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, title, price, image, rating },
    });
  };

  const decreaseQty = () => {
    dispatch({
      type: "DECREASE_QTY",
      payload: id,
    });
  };

    return (
        <div className="checkoutProduct">
            <img src={image} alt="" className="checkoutProduct__image" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}
                </p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                  <div className="checkoutProduct__qtyControls">
          <button onClick={decreaseQty} aria-label="decrease">-</button>
          <span className="checkoutProduct__qty">{qty}</span>
          <button onClick={increaseQty} aria-label="increase">+</button>
        </div>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill("")
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
                <button onClick={()=>removeFromBasket()}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
