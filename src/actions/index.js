import axios from 'axios';
import { FETCH_ERROR, FETCH_USER } from './types';

export const fetchUser = () => async (dispatch) => {
  try {
    const res = await axios.get('/auth/current_user');

    dispatch({ type: FETCH_USER, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FETCH_ERROR,
    });
  }
};
