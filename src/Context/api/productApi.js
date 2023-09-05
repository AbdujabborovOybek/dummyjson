import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    // Get all products path: "/products" (public) (GET)
    getAllProducts: builder.query({
      query: (limit) => ({
        url: `/products?limit=${limit}`,
        method: "GET",
      }),
    }),

    // Get product by id path: "/products/:id" (public) (GET)
    getProductById: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductByIdQuery } = productApi;
