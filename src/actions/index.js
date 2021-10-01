import axios from 'axios';
import {
  FETCH_ERROR,
  FETCH_TEXT,
  FETCH_TEXT_SUCCESS,
  FETCH_USER,
} from './types';

export const fetchUser = () => async (dispatch) => {
  try {
    const res = await axios.get('/auth/current_user');

    dispatch({ type: FETCH_USER, payload: res.data });
  } catch (error) {
    // console.log(error);
    dispatch({
      type: FETCH_ERROR,
    });
  }
};

export const fetchText = (image) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_TEXT });

    const res = await axios.post('/api/get_text', {
      data: image,
    });

    dispatch({ type: FETCH_TEXT_SUCCESS, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FETCH_ERROR,
    });
  }
};
