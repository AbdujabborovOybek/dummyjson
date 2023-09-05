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

    // Get all product category path: "/products/categories/:category" (public) (GET)
    getAllProductCategory: builder.query({
      query: () => ({
        url: `/products/categories/`,
        method: "GET",
      }),
    }),

    // Get Search product path: "/products/search?q=phone" (public) (GET)
    getSearchProduct: builder.query({
      query: (q) => ({
        url: `/products/search?q=${q}`,
        method: "GET",
      }),
    }),

    // Get product by category path: "/products/category/:category" (public) (GET)
    getProductByCategory: builder.query({
      query: (category = "smartphones") => ({
        url: `/products/category/${category}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useGetAllProductCategoryQuery,
  useGetSearchProductQuery,
  useGetProductByCategoryQuery,
} = productApi;
