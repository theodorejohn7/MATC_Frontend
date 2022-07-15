import {
  GET_PRODUCT_DATA,
  RESET_PRODUCT_DATA,
} from "../action/getProductAction";

const initialState = {};

const getProductReducer = (
  state = initialState,
  action: { type: string; data: any }
) => {
  switch (action.type) {
    case GET_PRODUCT_DATA:
      return { ...state, getProductData: action.data };
    case RESET_PRODUCT_DATA:
      return { ...state, getProductData: [] };
    default:
      return state;
  }
};

export default getProductReducer;