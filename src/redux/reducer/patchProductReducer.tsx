import { PATCH_PRODUCT_UPDATE } from "../action/patchProductAction";

const initialState = {};

const patchProductReducer = (
  state = initialState,
  action: { type: string; data: any }
) => {
  if (action.type === PATCH_PRODUCT_UPDATE) {
    console.log("@$# inside patch REDUCER if statement");

    return { ...state, patchProductUpdate: action.data };
  } else {
    return state;
  }
};
export default patchProductReducer;
