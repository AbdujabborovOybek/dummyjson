import React, { memo } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Header = memo(() => {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);

  return (
    <header className="header">
      <Link to="/">Dummy Shop</Link>

      <nav>
        <Link to="/products">
          <span>Products</span>
        </Link>
        <Link to="/cart">
          <i style={!cart.length ? { display: "none" } : {}}>{cart.length}</i>
          <span>Cart</span>
        </Link>
        <Link to={user ? "/profile" : "/login"}>
          <span>{user ? "Profile" : "Login"}</span>
        </Link>
      </nav>
    </header>
  );
});
