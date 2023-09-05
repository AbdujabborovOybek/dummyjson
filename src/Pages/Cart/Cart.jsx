import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { enqueueSnackbar } from "notistack";

export const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const handleIncrement = (id) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: id });
  };

  const handleDecrement = (id) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: id });
  };

  const handleClear = () => {
    dispatch({ type: "CLEAR_CART" });
    enqueueSnackbar("Orders submitted", { variant: "success" });
  };

  const totalPrices = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="page cart">
      <h1 style={cart.length ? { display: "none" } : {}}>No items in cart</h1>

      <ol>
        {cart.map((item) => {
          return (
            <li className="cart_item">
              <img src={item.thumbnail} alt="" />

              <h3>
                <span>Lorem ipsum dolor sit.</span>
                <i>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nesciunt unde vero dolorem!
                </i>
              </h3>

              <div className="cart_action">
                <button onClick={() => handleDecrement(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrement(item.id)}>+</button>

                <button onClick={() => handleRemove(item.id)}>X</button>
              </div>
              <p>
                {item.price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
            </li>
          );
        })}
      </ol>

      <div className="cart_total">
        <h3>
          Total:{" "}
          {totalPrices.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </h3>

        <button disabled={!cart.length} onClick={handleClear}>
          Submit
        </button>
      </div>
    </div>
  );
};
