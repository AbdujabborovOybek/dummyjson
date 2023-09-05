import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Components/Layout/Layout";
import { Login } from "./Pages/Login/Login";
import { ProtectedProfile } from "./Components/Profile/Profile";

export const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="login" element={<Login />} />
        <Route element={<ProtectedProfile />}>
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

const Home = () => <h1>Home</h1>;
const Products = () => <h1>Products</h1>;
const Cart = () => <h1>Cart</h1>;
const NotFound = () => <h1>404 Not Found</h1>;
