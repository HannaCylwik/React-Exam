import React from "react";
import style from "./H2.module.css";

const H2 = ({ name }) => {
    return (
        <div className={style.middleHeader__container}>
            <h2 className={style.middleHeader}>{name}</h2>
        </div>
    );
};

export default H2;