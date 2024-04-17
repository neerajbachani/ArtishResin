

import { api } from "../../../Config/ApiConfig";
import { CREATE_GALLERY_FAILURE, CREATE_GALLERY_REQUEST, CREATE_GALLERY_SUCCESS, DELETE_GALLERY_FAILURE, DELETE_GALLERY_REQUEST, DELETE_GALLERY_SUCCESS, GET_GALLERY_FAILURE, GET_GALLERY_REQUEST, GET_GALLERY_SUCCESS } from "./ActionType";


export const getGalleryPhotos = () => {
 
    return async (dispatch) => {
      dispatch({type: GET_GALLERY_REQUEST });
      try {
       
        const response = await api.get(`/api/admin/getGallery`);
        console.log("GET GALLERY PHOTOS ", response.data);
        dispatch({type: GET_GALLERY_SUCCESS , payload: response.data});
      } catch (error) {
        console.log("catch error ", error);
        dispatch({type: GET_GALLERY_FAILURE, payload: error.message });
      }
    };
};

export const createGalleryPhoto = (galleryPhoto) => async (dispatch) => {
  console.log(galleryPhoto)
  try {
    dispatch({ type: CREATE_GALLERY_REQUEST });

    const { data } = await api.post(`/api/admin/manageGallery/`, galleryPhoto);
    console.log(data)

    dispatch({
      type: CREATE_GALLERY_SUCCESS,
      payload: data,
    });

    console.log("Created Gallery ", data);
  } catch (error) {
    dispatch({
      type: CREATE_GALLERY_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteGalleryPhoto = (galleryPhotoId) => async (dispatch) => {
  console.log("delete gallery photo with Id", galleryPhotoId)
  try {
    dispatch({ type: DELETE_GALLERY_REQUEST });

    let {data}=await api.delete(`/api/admin/deleteGallery/${galleryPhotoId}`);

    console.log("delete gallery photo ",data)

    dispatch({
      type: DELETE_GALLERY_SUCCESS,
      payload: galleryPhotoId,
    });

    console.log("Gallery delete ",data)
  } catch (error) {
    console.log("catch error ",error)
    dispatch({
      type: DELETE_GALLERY_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};