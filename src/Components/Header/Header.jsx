import React, { memo } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetMyCartQuery } from "../../Context/api/cartApi";

export const Header = memo(() => {
  const user = useSelector((state) => state.user);
  const { data: cart } = useGetMyCartQuery(user.id);

  return (
    <header className="header">
      <Link to="/">Dummy Shop</Link>

      <nav>
        <Link to="/products">
          <span>Products</span>
        </Link>
        <Link to="/cart">
          <i style={!cart?.total ? { display: "none" } : {}}>{cart?.total}</i>
          <span>Cart</span>
        </Link>
        <Link to={user ? "/profile" : "/login"}>
          <span>{user ? "Profile" : "Login"}</span>
        </Link>
      </nav>
    </header>
  );
});
