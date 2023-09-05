import React, { useState } from "react";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../Context/api/productApi";
import { Product } from "../../Components/Product/Product";
import { useGetAllProductsQuery } from "../../Context/api/productApi.js";
import { useDispatch } from "react-redux";
import { enqueueSnackbar } from "notistack";

export const ProductDetail = () => {
  const [showImage, setShowImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { data = null } = useGetProductByIdQuery(id);
  const { data: products } = useGetAllProductsQuery(8);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;
    if (value < 1) return;
    setQuantity(value);
  };

  const handleAction = (type) => {
    if (type) return setQuantity((prev) => +prev + 1);
    if (quantity <= 1) return;
    setQuantity((prev) => prev - 1);
  };

  const handleAddToCart = async (e) => {
    e.preventDefault();
    const product = JSON.parse(JSON.stringify(data));
    product.quantity = quantity;
    if (product.stock < quantity) return alert("Not enough stock");
    dispatch({ type: "ADD_TO_CART", payload: product });
    enqueueSnackbar("Product added to cart", { variant: "success" });
  };

  return (
    <div className="page product-detail">
      <div className="product-detail-images">
        <figure>
          <img src={data?.images[showImage]} alt="" />

          <figcaption>
            {data?.images.map((img, index) => {
              return (
                <div key={index} onClick={() => setShowImage(index)}>
                  <img src={img} alt="" />
                  <span
                    style={showImage === index ? { display: "none" } : {}}
                  ></span>
                </div>
              );
            })}
          </figcaption>
        </figure>
      </div>
      <div className="product-detail-info">
        <h2>{data?.title}</h2>
        <p>{data?.description}</p>

        <h3>
          <span>Brand:</span>
          <span>{data?.brand}</span>
        </h3>
        <h3>
          <span>Category:</span>
          <span>{data?.category}</span>
        </h3>
        <h3>
          <span>Price:</span>
          <span>{data?.price}</span>
        </h3>

        <h3>
          <span>Rating:</span>
          <span>{data?.rating}</span>
        </h3>

        <h3>
          <span>Stock:</span>
          <span>{data?.stock}</span>
        </h3>

        <h3>
          <span>Discount:</span>
          <span>{data?.discountPercentage}</span>
        </h3>

        <form className="product-detail-action" onSubmit={handleAddToCart}>
          <button type="button" onClick={() => handleAction(false)}>
            -
          </button>
          <input type="number" value={quantity} onChange={handleChange} />
          <button type="button" onClick={() => handleAction(true)}>
            +
          </button>
          <button>Add to Cart</button>
        </form>
      </div>

      <Product data={products?.products} />
    </div>
  );
};
