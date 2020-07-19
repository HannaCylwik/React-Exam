import React from "react";
import style from "./Products.module.css";
import { addedToCart } from "../../actions/actions";
import { useDispatch, useSelector } from "react-redux";

const Products = ({ src, price, title, id }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.productsInCart);

  const cartClick = (id) => {
    dispatch(addedToCart(products, id, cart));
    console.log(cart);
  };

  return (
    <div>
      <div className={style.product__container}>
        <img className={style.product__image} src={src} alt="" />
        <p>{price}</p>
        <h3>{title}</h3>
        <button onClick={() => cartClick(id)}>Buy me</button>
      </div>
      {/* <button onClick={addToCart}>Buy me</button> */}
    </div>
  );
};

export default Products;
