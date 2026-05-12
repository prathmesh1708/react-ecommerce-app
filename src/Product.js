import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__imageContainer">
        <img src={image} alt={title} className="product__image" />
      </div>
      <div className="product__info">
        <p className="product__title">{title}</p>
        <div className="product__rating">
          {Array(rating).fill().map((_, i) => (
            <span key={i}>⭐</span>
          ))}
        </div>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <button onClick={addToBasket} className="product__button">
          Add to basket
        </button>
      </div>
    </div>
  );
}

export default Product;