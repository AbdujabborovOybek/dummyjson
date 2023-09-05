import React, { memo } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = memo(() => {
  return (
    <header className="header">
      <Link to="/">Dummy Shop</Link>

      <nav>
        <Link to="/products">
          <span>Products</span>
        </Link>
        <Link to="/cart">
          <span>Cart</span>
        </Link>
        <Link to="/login">
          <span>Login</span>
        </Link>
      </nav>
    </header>
  );
});
