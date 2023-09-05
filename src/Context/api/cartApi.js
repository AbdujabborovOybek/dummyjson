import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Cart"],
  endpoints: (builder) => ({
    // Get my cart path: "/carts/user/id" (private) (GET)
    getMyCart: builder.query({
      query: (id) => ({
        url: `/carts/user/${id}`,
        method: "GET",
      }),
      providesTags: ["Cart"],
    }),

    // Add product to cart path: "/carts/add" (private) (POST)
    addProductToCart: builder.mutation({
      query: (body) => ({
        url: "/carts/add",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});

export const { useGetMyCartQuery } = cartApi;
