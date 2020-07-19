import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../actions/actions";
import H1 from "../h1/H1";
import H2 from "../h2/H2";
import Products from "../products/Products";
import style from "./Home.module.css";

const Home = () => {
  const products = useSelector((state) => state.products);
  const isLoading = useSelector((state) => state.isLoading);
  const isError = useSelector((state) => state.isError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (isLoading) {
    return <h2>...Loading...</h2>;
  }
  if (isError) {
    return <h2>Error!</h2>;
  } else {
    const featuredDesktops = products.filter(
      (product) => product.featured === true && product.category === "desktop"
    );
    const featuredTablets = products.filter(
      (product) => product.featured === true && product.category === "tablet"
    );
    return (
      <div className={style.products__container}>
        <H1 name="Welcome to our Page" />
        <div className={style.category__container}>
          <H2 name="Desktops" />
          {featuredDesktops.map((product) => (
            <Products
              src={product.image}
              price={product.amount}
              title={product.name}
              id={product.id}
            />
          ))}
        </div>
        <div className={style.category__container}>
          <H2 name="Tablets" />
          {featuredTablets.map((product) => (
            <Products
              src={product.image}
              price={product.amount}
              title={product.name}
              id={product.id}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default Home;
