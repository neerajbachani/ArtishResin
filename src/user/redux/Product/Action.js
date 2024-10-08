import axios from "axios";
import { API_BASE_URL, api } from "../../../Config/ApiConfig";


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
  SEARCH_PRODUCTS_REQUEST,
  SEARCH_PRODUCTS_SUCCESS,
  SEARCH_PRODUCTS_FAILURE,
} from "./ActionType";
import { showErrorToast, showSuccessToast } from "../../components/toast";

export const findProducts = (reqData) => async (dispatch) => {
  const {
    colors,
    varmalaPreservation,
    workshop,
    wallClock,
    navkarMantraFrame,
    namePlate,
    resinSpecial,
    geodeArt,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    stock,
    sort,
    pageNumber,
    pageSize,
    search,
  } = reqData;

  try {
    dispatch({ type: FIND_PRODUCTS_BY_CATEGORY_REQUEST });

    // Construct the query parameters
    const params = new URLSearchParams({
      query: search || '',
      varmalaPreservation: varmalaPreservation || '',
      wallClock: wallClock || '',
      navkarMantraFrame: navkarMantraFrame || '',
      namePlate: namePlate || '',
      resinSpecial: resinSpecial || '',
      geodeArt: geodeArt || '',
      workshop: workshop || '',
      sort: sort || '',
      pageNumber: pageNumber || '',
      pageSize: pageSize || '',
      minPrice: minPrice || '',
      maxPrice: maxPrice || '',
      minDiscount: minDiscount || '',
      stock: stock || '',
      sizes: sizes ? sizes.join(',') : ''
    });

    // Remove empty parameters
    for (const [key, value] of params.entries()) {
      if (!value) {
        params.delete(key);
      }
    }

    const apiUrl = `/api/products?${params.toString()}`;

    const { data } = await api.get(apiUrl);

    console.log("Fetched data from API:", data);
    dispatch({
      type: FIND_PRODUCTS_BY_CATEGORY_SUCCESS,
      payload: data,
    });
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

    console.log("products by id:", data);
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


const jwt = localStorage.getItem("jwt")

const apii = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Authorization": `Bearer ${jwt}`,
    'Content-Type': 'multipart/form-data',
  },
  timeout: 60000,
});

export const createProduct = (product) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_PRODUCT_REQUEST });

    const formData = new FormData();
    formData.append('image', product.image);
    formData.append('name', product.name);
    formData.append('details', product.details);
    formData.append('color', product.color);
    formData.append('discount', product.discount);
    formData.append('price', product.price);
    formData.append('discountPercent', product.discountPercent);
    formData.append('discountedPrice', product.discountedPrice);
    formData.append('quantity', product.quantity);
    formData.append('varmalaPreservation', product.varmalaPreservation);
    formData.append('workshop', product.workshop);
    formData.append('wallClock', product.wallClock);
    formData.append('namePlate', product.namePlate);
    formData.append('navkarMantraFrame', product.navkarMantraFrame);
    formData.append('resinSpecial', product.resinSpecial);
    formData.append('geodeArt', product.geodeArt);
    formData.append('description1', product.description1);
    formData.append('description2', product.description2);
    formData.append('description3', product.description3);

    const { data } = await api.post(`/api/admin/products/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        console.log(`Upload progress: ${percentCompleted}%`);
      },
    });

    dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: data });
    console.log('created product ', data);
    showSuccessToast('Product created successfully');
  } catch (error) {
    console.error('Error creating product:', error);

    let errorMessage = 'Failed to create product. Please try again.';

    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Error response:', error.response.data);
      console.error('Error status:', error.response.status);
      
      if (error.response.status === 400) {
        errorMessage = 'Please fill in all required fields';
      } else if (error.response.status === 413) {
        errorMessage = 'The image file is too large. Please use a smaller image.';
      }
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Error request:', error.request);
      errorMessage = 'No response received from the server. Please check your internet connection.';
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error message:', error.message);
    }

    dispatch({
      type: CREATE_PRODUCT_FAILURE,
      payload: errorMessage,
    });

    showErrorToast(errorMessage);
  }
};
export const updateProduct = (product, productId) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PRODUCT_REQUEST });

    const formData = new FormData();
    formData.append('image', product.image);
    formData.append('name', product.name);
    formData.append('details', product.details);
    formData.append('color', product.color);
    formData.append('discount', product.discount);
    formData.append('price', product.price);
    formData.append('discountPercent', product.discountPercent);
    formData.append('discountedPrice', product.discountedPrice);
    formData.append('varmalaPreservation', product.varmalaPreservation);
    formData.append('workshop', product.workshop);
    formData.append('wallClock', product.wallClock);
    formData.append('namePlate', product.namePlate);
    formData.append('navkarMantraFrame', product.navkarMantraFrame);
    formData.append('resinSpecial', product.resinSpecial);
    formData.append('geodeArt', product.geodeArt);
    formData.append('description1', product.description1);
    formData.append('description2', product.description2);
    formData.append('description3', product.description3);

    const { data } = await apii.put(`/api/admin/products/${productId}`, formData);

    dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: data });
    console.log('created product ', data);
    showSuccessToast('Product created successfully');
  } catch (error) {
    dispatch({
      type: CREATE_PRODUCT_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    if (error.response && error.response.status === 400) {
      // Validation error
      showErrorToast('Please fill in all required fields');
    } else {
      console.log(error.response);
      console.log(error);
      showErrorToast('Failed to create product. Please try again.');
    }
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
    showSuccessToast('Product Deleted Successfully');
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

