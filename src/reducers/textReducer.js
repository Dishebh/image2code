import {
  FETCH_TEXT,
  FETCH_ERROR,
  REMOVE_TEXT,
  FETCH_TEXT_SUCCESS,
} from '../actions/types';

const initialState = {
  text: '',
  isTextLoading: false,
};

export const textReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TEXT:
      return {
        ...state,
        isTextLoading: true,
      };
    case FETCH_TEXT_SUCCESS:
      return {
        ...state,
        text: action.payload,
        isTextLoading: false,
      };
    case REMOVE_TEXT:
      return {
        ...state,
        text: '',
        isTextLoading: false,
      };
    case FETCH_ERROR:
      return {
        ...state,
        isTextLoading: false,
        text: '',
      };
    default:
      return state;
  }
};
