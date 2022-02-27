import {
  LOAD_USER,
  LOAD_USER_SUCCES,
  LOAD_USER_ERROR,
} from "../constants/constants";
import axios from "axios";

export const loadUser = () => ({
  type: LOAD_USER,
});

export const loadUserSucces = (data) => ({
  type: LOAD_USER_SUCCES,
  payload: data, // email, passord, token
});

export const loadUserError = (error) => ({
  type: LOAD_USER_ERROR,
  payload: error,
});

export const fetchUsers = (path, dataToForm) => {
  return (dispatch) => {
    dispatch(loadUser());
    axios
      .post(`localhost:3001/api/v1/user/${path}`, dataToForm)
      .then((res) => {
        dispatch(loadUser(res.data));
      })
      .catch((err) => {
        dispatch(loadUserError(err.message));
      });
  };
};
