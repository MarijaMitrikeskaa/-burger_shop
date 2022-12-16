import React from "react";

import "../../styles/product-card.css";



import { useDispatch } from "react-redux";
import { cartActions } from "../../store/shopping-cart/cartSlice";

const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  // useDispatch takes in an object that contains the action type 
  // and payload, which will be compared to all the reducers and the state will be changed accordingly.
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };

  return (
    <div className="product__item">
      <div className="product__img">
        <img src={image01} alt="product-img" className="w-50" />
      </div>

      <div className="product__content">
       
        <div className=" d-flex align-items-center justify-content-between ">
          <span className="product__price">{price} den.</span>
          <button className="addTOCart__btn" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
