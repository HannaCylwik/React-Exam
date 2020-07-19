import React, { useEffect } from "react";
import Filters from "../filters/Filters";
import Products from "../products/Products";
import style from "./Catalog.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProductsFiltered,
  fetchDataFiltered,
  addedToCart,
} from "../../actions/actions";

const Catalog = () => {
  const products = useSelector((state) => state.products);
  const isLoading = useSelector((state) => state.isLoading);
  const isError = useSelector((state) => state.isError);
  const productsFiltered = useSelector((state) => state.productsFiltered);
  const cart = useSelector((state) => state.productsInCart);
  const dispatch = useDispatch();

  if (isLoading) {
    return <h2>...Loading...</h2>;
  }
  if (isError) {
    return <h2>Error!</h2>;
  } else {
    const clickChanger = () => {
      dispatch(fetchDataFiltered(products));
    };

    const changer = (e) => {
      dispatch(fetchProductsFiltered(products, e.target.value));
    };

    return (
      <div className={style.catalog__container}>
        <div className={style.filters__container}>
          <Filters onClick={clickChanger} onChange={changer} />
        </div>
        <div className={style.products__container}>
          {productsFiltered.map((prod) => (
            <Products
              src={prod.image}
              title={prod.name}
              price={prod.amount}
              id={prod.id}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default Catalog;
