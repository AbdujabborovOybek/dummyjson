import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { reUser } from "./user";

import { userApi } from "./api/userApi";

export const store = configureStore({
  reducer: combineReducers({
    user: reUser,
    [userApi.reducerPath]: userApi.reducer,
  }),
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(userApi.middleware);
  },
});
