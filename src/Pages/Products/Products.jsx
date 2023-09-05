import React, { useState } from "react";
import "./Products.css";
import { Product } from "../../Components/Product/Product";
import {
  useGetAllProductsQuery,
  useGetAllProductCategoryQuery,
  useGetSearchProductQuery,
  useGetProductByCategoryQuery,
} from "../../Context/api/productApi.js";

export const Products = () => {
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState("");
  const { data } = useGetAllProductsQuery(30);
  const { data: category = null } = useGetAllProductCategoryQuery();
  const { data: searchProduct = null } = useGetSearchProductQuery(search);
  const { data: categoryProduct = null } = useGetProductByCategoryQuery(search);

  const handleSearch = async (e) => {
    setSearch(e.target.value);
    setResult(searchProduct?.products || []);
  };

  const handleCategory = (e) => {
    setSearch(e.target.value);
    setResult(categoryProduct?.products || []);
  };

  return (
    <div className="page products">
      <div className="products_filter">
        <input type="search" placeholder="Search" onChange={handleSearch} />
        <select name="category" id="category" onChange={handleCategory}>
          {category?.map((item, index) => (
            <option key={index} value={item.id}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="products_list">
        <Product data={result.length ? result : data?.products} colomun={3} />
      </div>
    </div>
  );
};
