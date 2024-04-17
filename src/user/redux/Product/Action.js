


import axios from "axios";
import { api } from "../../../Config/ApiConfig";
import {
  FIND_PRODUCTS_BY_CATEGORY_REQUEST,
  FIND_PRODUCTS_BY_CATEGORY_SUCCESS,
  FIND_PRODUCTS_BY_CATEGORY_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
} from "./ActionType";


export const findProducts = (reqData) => async (dispatch) => {
  const {
    colors,
    resin,
    digitalArt,
    jewel,
    resinRawMaterials,
    festivalSpecial,
    lippanArt,
    business,
    vintage,
    geodeArt,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    category,
    stock,
    sort,
    pageNumber,
    pageSize,
  } = reqData;

  try {
    dispatch({ type: FIND_PRODUCTS_BY_CATEGORY_REQUEST });

    const { data } = await api.get(
      `/api/products?resin=${resin}&digitalArt=${digitalArt}&jewel=${jewel}&resinRawMaterials=${resinRawMaterials}&festivalSpecial=${festivalSpecial}&business=${business}&vintage=${vintage}&lippanArt=${lippanArt}&geodeArt=${geodeArt}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`
    );

    console.log("Fetched data from API:", data);

    // Check if the content property exists and is an array
    if (data.content && Array.isArray(data.content)) {
      console.log("Data content is an array");

      // Create a new array reference by spreading the content array
      const randomizedProducts = [...data.content].sort(() => Math.random() - 0.5);

      console.log("Randomized data:", randomizedProducts);

      dispatch({
        type: FIND_PRODUCTS_BY_CATEGORY_SUCCESS,
        payload: {
          ...data, // Preserve the other properties
          content: randomizedProducts, // Replace the content with the randomized array
        },
      });
    } else {
      console.log("Data content is not an array");
      // Handle the case where data.content is not an array
    }
  } catch (error) {
    dispatch({
      type: FIND_PRODUCTS_BY_CATEGORY_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const findProductById = (reqData) => async (dispatch) => {
  try {
    dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });

    const { data } = await api.get(`/api/products/id/${reqData.productId}`);

    console.log("products by  id : ", data);
    dispatch({
      type: FIND_PRODUCT_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FIND_PRODUCT_BY_ID_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createProduct = (product) => async (dispatch) => {
  console.log(product)
  try {
    dispatch({ type: CREATE_PRODUCT_REQUEST });

    const { data } = await api.post(`/api/admin/products/`,product);
    console.log(data)

    dispatch({
      type: CREATE_PRODUCT_SUCCESS,
      payload: data,
    });

    console.log("created product ", data);
  } catch (error) {
    dispatch({
      type: CREATE_PRODUCT_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateProduct = (product, productId) => async (dispatch) => {
  
  try {
    dispatch({ type: UPDATE_PRODUCT_REQUEST });

    const { data } = await api.put(
      `/api/admin/products/${productId}`, // Accessing productId property
      product // Passing the entire product object as the request body
    );
    console.log("update product ", data);
    dispatch({
      type: UPDATE_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PRODUCT_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const deleteProduct = (productId) => async (dispatch) => {
  console.log("delete product action",productId)
  try {
    dispatch({ type: DELETE_PRODUCT_REQUEST });

    let {data}=await api.delete(`/api/admin/products/${productId}`);

    console.log("delete product ",data)

    dispatch({
      type: DELETE_PRODUCT_SUCCESS,
      payload: productId,
    });

    console.log("product delte ",data)
  } catch (error) {
    console.log("catch error ",error)
    dispatch({
      type: DELETE_PRODUCT_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

