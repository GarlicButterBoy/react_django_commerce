import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGOUT,
  USER_LOGIN_FAIL,
} from "../constants/userConstants";


export const userLoginReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true, products: [] };

    case USER_LOGIN_SUCCESS:
      return { loading: false, products: action.payload };

    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};