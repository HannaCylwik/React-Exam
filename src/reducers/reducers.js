import { ACTION_TYPES } from "../actions/actions";

const initState = {
  products: null,
  isLoading: true,
  isError: false,
  productsFiltered: [],
  productsInCart: [],
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_DATA:
      return { ...initState };
    case ACTION_TYPES.FETCH_DATA_SUCCESS:
      return {
        products: action.data,
        isLoading: false,
        isError: false,
        productsFiltered: action.data,
        productsInCart: [],
      };
    case ACTION_TYPES.FETCH_DATA_ERROR:
      return {
        products: null,
        isLoading: false,
        isError: true,
        productsFiltered: [],
        productsInCart: [],
      };
    case ACTION_TYPES.FETCH_DATA_FILTERED:
      return {
        ...state,
        productsFiltered: action.filtered,
      };
    case ACTION_TYPES.ADD_TO_CART:
      return {
        ...state,
        productsInCart: action.cart,
      };
    default:
      return state;
  }
};
