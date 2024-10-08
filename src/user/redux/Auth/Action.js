import axios from "axios";
import { toast } from 'react-hot-toast';
import { API_BASE_URL, api } from "../../../Config/ApiConfig";
import { GET_ALL_USER_FAILURE, GET_ALL_USER_REQUEST, GET_ALL_USER_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";
import { GET_ALL_RATINGS_SUCCESS } from "../RateAndReview/ActionType";
import { showSuccessToast } from "../../components/toast";


const token = localStorage.getItem("jwt")
export const registerRequest = () => ({ type: REGISTER_REQUEST });
export const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
export const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });
export const register = (userData) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
    const user = response.data;
    if (user.jwt) {
      storeToken(user.jwt);
    }
    console.log("user ", user);
    dispatch(registerSuccess(user.jwt));
    showSuccessToast('Account created successfully');
  } catch (error) {
    console.error('Registration error:', error);
    console.log('Error response:', error.response);

    // Check if the error is due to an existing email
    if (error.response && error.response.data && error.response.data.error) {
      const errorMessage = error.response.data.error;
      if (errorMessage.includes('User already exists with email:')) {
        toast.error('Email already exists. Please use a different email.');
      } else {
        toast.error('An error occurred. Please try again.');
      }
    } else {
      toast.error('An error occurred. Please try again.');
    }

    dispatch(registerFailure(error.message));
  }
};

export const loginRequest = () => ({ type: LOGIN_REQUEST });
export const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
export const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const login = (userData) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await api.post(`/auth/signin`, userData);
    const user = response.data;
    if (user.jwt) {
      storeToken(user.jwt);
    }
    console.log("user: ", user);
    dispatch(loginSuccess(user.jwt));
   
    console.log(user.role);
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Unauthorized (invalid email or password)
      showErrorToast('Invalid email or password');
    } else {
      showErrorToast('An error occurred. Please try again.');
    }
    dispatch(loginFailure(error.message));
  }
};

export const getUserRequest = () => ({ type: GET_USER_REQUEST });
export const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
export const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error });

export const getUser = ( jwt ) => async (dispatch) => {
    dispatch(getUserRequest())
  try {
    const response = await api.get(`/api/users/profile`,{
        headers:{
            "Authorization": `Bearer ${jwt}`
        }
    });
    const user = response.data;
    console.log("user: ", user)
    console.log("role: ", user.role)


    dispatch(getUserSuccess(user),{
      payload: user.role,
      // payload: {isAuthenticated: true}
    })
  } catch (error) {
    dispatch(getUserFailure(error.message))
  }
};

export const getAllUsers = () => {
  return async (dispatch, getState) => {
    const currentUsers = getState().auth.users;
    
    dispatch({type: GET_ALL_USER_REQUEST});
    try {
      const response = await api.get(`/api/users/`);
      console.log("Get All Users ", response.data);
      
      // Only update if the data has changed
      if (JSON.stringify(currentUsers) !== JSON.stringify(response.data)) {
        dispatch({type: GET_ALL_USER_SUCCESS, payload: response.data});
      } else {
        dispatch({type: GET_ALL_USER_SUCCESS, payload: currentUsers});
      }
    } catch (error) {
      console.log("catch error ", error);
      dispatch({type: GET_ALL_USER_FAILURE, payload: error.message });
    }
  };
}

export const updateProfile = (userData) => async (dispatch) => {
  try {
    const response = await api.put('/api/users/profile', userData);
    dispatch({ type: 'UPDATE_PROFILE_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'UPDATE_PROFILE_FAILURE', payload: error.message });
  }
};

export const addAddress = (addressData) => async (dispatch) => {
  try {
    const response = await api.post('/api/users/address', addressData);
    dispatch({ type: 'ADD_ADDRESS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'ADD_ADDRESS_FAILURE', payload: error.message });
  }
};

export const updateAddress = (addressId, addressData) => async (dispatch) => {
  try {
    const response = await api.put(`/api/users/address/${addressId}`, addressData);
    dispatch({ type: 'UPDATE_ADDRESS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'UPDATE_ADDRESS_FAILURE', payload: error.message });
  }
};

export const deleteAddress = (addressId) => async (dispatch) => {
  try {
    const response = await api.delete(`/api/users/address/${addressId}`);
    dispatch({ type: 'DELETE_ADDRESS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'DELETE_ADDRESS_FAILURE', payload: error.message });
  }
};

export const logout = (isManualLogout = false) => (dispatch) => {
  dispatch({type: LOGOUT, payload: null});
  localStorage.clear();
  if (isManualLogout) {
    // Force token expiration
    localStorage.setItem('tokenExpiration', '0');
  }
};



export const storeToken = (token) => {
  const now = new Date();
  const expirationTime = now.getTime() + 48 * 60 * 60 * 1000; // 48 hours
  localStorage.setItem('jwt', token);
  localStorage.setItem('tokenExpiration', expirationTime);
};

export const isTokenExpired = () => {
  const expiration = localStorage.getItem('tokenExpiration');
  if (!expiration) return true;
  return new Date().getTime() > parseInt(expiration);
};

export const setupTokenExpirationTimer = (dispatch) => {
  const expiration = localStorage.getItem('tokenExpiration');
  if (!expiration) return;

  const timeUntilExpiration = parseInt(expiration) - new Date().getTime();
  if (timeUntilExpiration <= 0) {
    dispatch(logout());
  } else {
    setTimeout(() => dispatch(logout()), timeUntilExpiration);
  }
};