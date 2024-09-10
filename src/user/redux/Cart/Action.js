import axios from "axios";

// import { API_BASE_URL, api } from "../../../Config/ApiConfig"
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType";



export const getCart = (jwt) => async (dispatch) => {
    try {
      dispatch({ type: GET_CART_REQUEST });
      const config = {
          headers: {
            Authorization: `Bearer ${jwt}`,
            "Content-Type":"application/json"
          },
        };
      const { data } = await axios.get(`${API_BASE_URL}/api/cart/`,config);
  console.log("cart ",data)
      dispatch({
        type: GET_CART_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_CART_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };


  
  const API_BASE_URL = 'http://localhost:3000';
  
  export const addItemToCart = (reqData) => async (dispatch) => {
    try {
      dispatch({ type: ADD_ITEM_TO_CART_REQUEST });
  
      const config = {
        headers: {
          Authorization: `Bearer ${reqData.jwt}`,
          'Content-Type': 'multipart/form-data',
        },
      };
  
      const response = await axios.put(
        `${API_BASE_URL}/api/cart/add`,
        reqData.formData,
        config
      );
  
      console.log('Add item to cart response:', response);
  
      if (response.status === 200) {
        dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: response.data });
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
  
      let errorMessage = 'An error occurred while adding the item to the cart.';
  
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Error response data:', error.response.data);
        console.error('Error response status:', error.response.status);
        console.error('Error response headers:', error.response.headers);
  
        errorMessage = error.response.data.message || `Server error: ${error.response.status}`;
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Error request:', error.request);
        errorMessage = 'No response received from the server. Please check your network connection.';
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error message:', error.message);
        errorMessage = error.message;
      }
  
      dispatch({
        type: ADD_ITEM_TO_CART_FAILURE,
        payload: errorMessage,
      });
  
      // Optionally, you can throw the error here if you want to handle it in the component
      // throw error;
    }
  };


export const removeCartItem = (reqData) => async (dispatch) => {
  try {
    dispatch({ type: REMOVE_CART_ITEM_REQUEST });
    const config = {
      headers: {
        Authorization: `Bearer ${reqData.jwt}`,
        "Content-Type":"application/json"
      },
    };
    await axios.delete(`${API_BASE_URL}/api/cart_items/${reqData.cartItemId}`,config);

    dispatch({
      type: REMOVE_CART_ITEM_SUCCESS,
      payload: reqData.cartItemId,
    });
  } catch (error) {
    dispatch({
      type: REMOVE_CART_ITEM_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateCartItem = (reqData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_CART_ITEM_REQUEST });

    const config = {
      headers: {
        Authorization: `Bearer ${reqData.jwt}`,
        'Content-Type': 'multipart/form-data',
      },
    };

    const { data } = await axios.put(
      `${API_BASE_URL}/api/cart_items/${reqData.cartItemId}`,
      reqData.data,
      config
    );

    console.log('updated cartitem ', data);
    dispatch({
      type: UPDATE_CART_ITEM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_CART_ITEM_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
