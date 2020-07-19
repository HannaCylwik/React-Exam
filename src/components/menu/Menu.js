import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Menu.module.css";
import cart from "../../bag.svg";
import { useSelector } from "react-redux";

const Menu = () => {
  const shopCart = useSelector((state) => state.productsInCart);

  const shopCartClick = () => {
    let price = 0;
    shopCart.forEach(shop => {
      price += Number(shop.amount)
    });
    alert(`Ilość przedmiotów w koszyku: ${shopCart.length}, Wartość przedmiotów w koszyku: ${price}`)
  }
  return (
    <div>
      <nav className={style.navigation}>
        <ul className={style.navigation__list}>
          <li className={style.navigation__element}>
            <NavLink className={style.navigation__link} to="/">
              Home
            </NavLink>
          </li>
          <li className={style.navigation__element}>
            <NavLink className={style.navigation__link} to="/catalog">
              Catalog
            </NavLink>
          </li>
          <li className={style.navigation__element}>
            <NavLink className={style.navigation__link} to="/about">
              About
            </NavLink>
          </li>
        </ul>
        <img src={cart} height="50px" className={style.navigation_img} onClick={shopCartClick} />
      </nav>
    </div>
  );
};

export default Menu;
