import React from "react";
import H4 from "../h4/H4";
import products from "../../products.json";

const manufacturers = [
  ...new Set(products.map((product) => product.manufacture)),
];

const Filters = ({ onClick, onChange }) => {
  return (
    <div>
      <div>
        <H4 name="Search" />
        <label>
          <input type="text" onChange={onChange} />
        </label>
        <button onClick={onClick}>Clear</button>
      </div>
      <div>
        <H4 name="Manufacturer" />
        <div>
          <div>
            <label for="All">All</label>
            <input
              id="All"
              type="radio"
              name="manufacturers"
              onChange={onChange}
              value="All"
            />
          </div>
          {manufacturers.map((manufacture) => (
            <div>
              <label for={manufacture}>{manufacture}</label>
              <input
                id={manufacture}
                type="radio"
                name="manufacturers"
                onChange={onChange}
                value={manufacture}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
