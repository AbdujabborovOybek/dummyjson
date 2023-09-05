import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Components/Layout/Layout";
import { Login } from "./Pages/Login/Login";
import { ProtectedProfile } from "./Components/ProtectedProfile/ProtectedProfile";
import { Home } from "./Pages/Home/Home";
import { ProductDetail } from "./Pages/ProductDetail/ProductDetail";
import { Cart } from "./Pages/Cart/Cart";
import { Products } from "./Pages/Products/Products";
import { Profile } from "./Pages/Profile/Profile";

export const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="login" element={<Login />} />
        <Route element={<ProtectedProfile />}>
          <Route path="cart" element={<Cart />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

const NotFound = () => <h1>404 Not Found</h1>;
