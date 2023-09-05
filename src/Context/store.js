import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { reUser } from "./user";

import { userApi } from "./api/userApi";
import { productApi } from "./api/productApi";
import { cartApi } from "./api/cartApi";

export const store = configureStore({
  reducer: combineReducers({
    user: reUser,
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
