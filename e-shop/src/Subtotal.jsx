import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useCart } from "./StateProvider";

function Subtotal() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalAmount = cart.reduce((sum, item) => {
    return sum + item.price * item.qty;
  }, 0);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({totalItems} items): <strong>${totalAmount}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={totalAmount}
        displayType={"text"}
        thousandSeparator={true}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
