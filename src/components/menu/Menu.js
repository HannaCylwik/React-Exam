import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Menu.module.css";
import cart from "../../bag.svg";

const Menu = () => {
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
        <img src={cart} height="50px" className={style.navigation_img} />
      </nav>
    </div>
  );
};

export default Menu;
