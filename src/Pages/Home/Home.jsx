import React, { useCallback, useState } from "react";
import "./Home.css";
import { Product } from "../../Components/Product/Product";
import { useGetAllProductsQuery } from "../../Context/api/productApi.js";
import { Pagenation } from "../../Components/Pagenation/Pagenation";

export const Home = () => {
  const [page, setPage] = useState(20);
  const { data } = useGetAllProductsQuery(page);

  const total = useCallback(
    (page = null) => {
      if (page) setPage(page * 20);
      return data?.total || 0;
    },
    [data]
  );

  return (
    <div className="page home">
      <Product data={data} />
      <Pagenation total={total} />
    </div>
  );
};
