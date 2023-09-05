import React, { useState } from "react";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../Context/api/productApi";
import { useAddProductToCartMutation } from "../../Context/api/cartApi";
import { useSelector } from "react-redux";
import { Product } from "../../Components/Product/Product";
import { useGetAllProductsQuery } from "../../Context/api/productApi.js";

export const ProductDetail = () => {
  const user = useSelector((state) => state.user);
  const [showImage, setShowImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { data = null } = useGetProductByIdQuery(id);
  const [addProductToCart] = useAddProductToCartMutation();
  const { data: products } = useGetAllProductsQuery(8);

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
    const item = {
      userId: user.id,
      products: [
        {
          id,
          quantity,
        },
      ],
    };
    const { data, error } = await addProductToCart(item);

    console.log(data);
    console.log(error);
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

      <Product data={products} />
    </div>
  );
};
