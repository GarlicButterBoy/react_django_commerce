import axios from "axios";
import { CART_ADD_ITEM } from "../constants/cartConstants";

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { date } = await axios.get(`/api/products/${id}`);
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product:DataTransfer.
        }
    })
};
