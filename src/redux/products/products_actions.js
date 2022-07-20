import axios from "axios";

import {
  FETCH_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  FETCH_SINGLE_PRODUCT,
} from "./products_types";

const URL = "http://bokala6061.pythonanywhere.com/";

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(URL);
      console.log(response);
      dispatch({ type: FETCH_PRODUCTS, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addToCart = (itemID) => {
  return {
    type: ADD_TO_CART,
    payload: itemID,
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const fetchSingleProduct = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${URL}/${id}`);
      dispatch({ type: FETCH_SINGLE_PRODUCT, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};
