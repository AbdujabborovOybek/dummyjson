import React, { memo } from "react";
import "./Product.css";
import { useNavigate } from "react-router-dom";

export const Product = memo((data, colomun) => {
  const navigate = useNavigate();
  const width = { width: `calc(100% / ${(colomun = 4)} - 25px)` };

  const getProduct = (id) => {
    navigate(`/product/${id}`);
    window.scrollTo(0, 0);
  };
  return (
    <>
      {data?.data?.products?.map((item) => {
        return (
          <figure
            className="product"
            style={width}
            key={item.id}
            title={item.title}
            onClick={() => getProduct(item.id)}
          >
            <img src={item.thumbnail} alt="" />
            <span className="product_discount" title="Discount">
              {item.discountPercentage}%
            </span>
            <figcaption>
              <h3>{item.title}</h3>
              <h4>
                <span>Price:</span>
                <i>
                  {item.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </i>
              </h4>

              <h4>
                <span>Brand:</span>
                <i>{item.brand}</i>
              </h4>
            </figcaption>
          </figure>
        );
      })}
    </>
  );
});
