import {
  LOAD_USER,
  LOAD_USER_SUCCES,
  LOAD_USER_AUTHORIZE,
  LOAD_USER_ERROR,
  RESET_USER,
} from "../constants/constants";
import axios from "axios";

export const loadUser = () => ({
  type: LOAD_USER,
});

export const loadUserSucces = (data) => ({
  type: LOAD_USER_SUCCES,
  payload: data,
});

export const loadUserAuthorize = (data) => ({
  type: LOAD_USER_AUTHORIZE,
  payload: data,
});

export const loadUserError = (error) => ({
  type: LOAD_USER_ERROR,
  payload: error,
});

export const resetUser = () => ({
  type: RESET_USER,
});

export function fetchUsers(dataToForm) {
  console.log(dataToForm);
  return async (dispatch) => {
    dispatch(loadUser());
    try {
      const response = await axios.post(
        `http://localhost:3001/api/v1/user/login`,
        dataToForm
      );
      const responseData = await response.data.body;
      dispatch(loadUserAuthorize(responseData));
      const headers = {
        Authorization: "Bearer " + responseData.token,
      };

      console.log(headers);

      const res = await axios.post(
        "http://localhost:3001/api/v1/user/profile",
        {},
        {
          headers: {
            Authorization: "Bearer " + responseData.token,
          },
        }
      );
      const responseUser = await res.data.body;
      console.log(responseUser);
      dispatch(loadUserSucces(responseUser));
    } catch (error) {
      dispatch(loadUserError(error));
    }
  };
}

export function changeUser(body, token) {
  return async (dispatch) => {
    console.log(body);
    try {
      const res = await axios.put(
        "http://localhost:3001/api/v1/user/profile",
        body,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      const responseUser = await res.data.body;
      console.log(responseUser);
      dispatch(loadUserSucces(responseUser));
    } catch (error) {
      dispatch(loadUserError(error));
    }
  };
}

// export const changeUser = (body, token) => {
//   return (dispatch) => {
//     return axios
//       .put("http://localhost:3001/api/v1/user/profile", body, {
//         headers: {
//           Authorization: "Bearer " + token,
//         },
//       })
//       .then((res) => {
//         dispatch(loadUserSucces(res.data.body));
//       })
//       .catch((error) => {
//         dispatch(loadUserError(error));
//       });
//   };
// };

// export const fetchUsers = (path, dataToForm, token) => {
//   console.log(dataToForm);
//       const headers = {
//         Authorization: `Bearer ${token}`,
//       };
//   return (dispatch) => {
//     dispatch(loadUser());
//     axios
//       .post(`http://localhost:3001/api/v1/user/${path}`, dataToForm, headers)
//       .then((res) => {
//         dispatch(loadUserAuthorize(res.data.body));
//         dispatch(loadUserSucces(res.data.body));
//         console.log(res.data);
//       })
//       .catch((err) => {
//         dispatch(loadUserError(err.message));
//       });
//   };
// };
