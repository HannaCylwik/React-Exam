import React from "react";
import style from "./H1.module.css";

const H1 = ({ name }) => {
    return (
        <div className={style.bigHeader_container}>
            <h1 className={style.bigHeader}>{name}</h1>
        </div>
    );
};

export default H1;