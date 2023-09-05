import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { reUser } from "./user";

import { userApi } from "./api/userApi";
import { productApi } from "./api/productApi";
import { cartApi } from "./api/cartApi";
import { reCaret } from "./cart";

export const store = configureStore({
  reducer: combineReducers({
    user: reUser,
    cart: reCaret,

    [userApi.reducerPath]: userApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
  }),
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      userApi.middleware,
      productApi.middleware,
      cartApi.middleware
    );
  },
});
