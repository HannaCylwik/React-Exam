export const ACTION_TYPES = {
  FETCH_DATA: "FETCH_DATA",
  FETCH_DATA_SUCCESS: "FETCH_DATA_SUCCESS",
  FETCH_DATA_ERROR: "FETCH_DATA_ERROR",
  FETCH_DATA_FILTERED: "FETCH_DATA_FILTERED",
  ADD_TO_CART: "ADD_TO_CART",
  ADDED_TO_CART: "ADDED_TO_CART",
};

export const fetchData = () => ({ type: ACTION_TYPES.FETCH_DATA });

export const fetchDataSuccess = (data) => ({
  type: ACTION_TYPES.FETCH_DATA_SUCCESS,
  data,
});

export const fetchDataError = () => ({ type: ACTION_TYPES.FETCH_DATA_ERROR });

export const fetchDataFiltered = (filtered) => ({
  type: ACTION_TYPES.FETCH_DATA_FILTERED,
  filtered,
});

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchData());
      const response = await fetch("https://d24huwa7xw9s1p.cloudfront.net");
      const productsData = await response.json();
      const products = [...productsData];
      dispatch(fetchDataSuccess(products));
    } catch {
      dispatch(fetchDataError());
    }
  };
};

export const fetchProductsFiltered = (products, input) => {
  return async (dispatch) => {
    try {
      let productsToFilter = [];
      if (input === "All") {
        productsToFilter = [...products];
        dispatch(fetchDataFiltered(productsToFilter));
      } else {
        productsToFilter = products.filter((product) => {
          if (
            product.manufacture.toLowerCase() === input.toLowerCase() ||
            product.name.toLowerCase() === input.toLowerCase()
          ) {
            return product;
          }
        });
        dispatch(fetchDataFiltered(productsToFilter));
      }
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const addToCart = (cart) => ({
  type: ACTION_TYPES.ADD_TO_CART,
  cart,
});

export const addedToCart = (products, id, cart) => {
  return async (dispatch) => {
    try {
      const productInCart = [...cart];
      const found = await products.find((prod) => prod.id === id);
      console.log(cart);
      console.log(found);
      productInCart.push(found);
      dispatch(addToCart(productInCart));
    } catch (e) {
      console.log(e.message);
    }
  };
};
