import axios from "axios";
import { Dispatch } from "redux";

 
const API_URL = process.env.REACT_APP_API_URL;

 
export const GET_MUTTON_DATA = "GET_MUTTON_DATA";
export const RESET_MUTTON_DATA = "RESET_MUTTON_DATA";
export const EDIT_MUTTON_DATA = "EDIT_MUTTON_DATA";

export const getMuttonData = (): any => {
  return async (dispatch: Dispatch) => {
    console.log("@$# testAction");
    const apiURL = `http://localhost:7002/api/category/mutton`;

    try {
      const muttonDataRecords = await axios.get(apiURL).then((response) => {
        if (response) {
          console.log("@$# test Action 15", response);
          return response.data;
        } else {
          return false;
        }
      });
      if (muttonDataRecords) {
        dispatch({ type: GET_MUTTON_DATA, data: muttonDataRecords });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const editMuttonData = (data:any):any => {
  console.log("inside edit mutton data")
  return async (dispatch: Dispatch) => {
    try {
      const muttonDataRecords = data;
      if (muttonDataRecords) {
        dispatch({ type: EDIT_MUTTON_DATA, data: muttonDataRecords });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const resetMuttonData = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: RESET_MUTTON_DATA });
  };
};
