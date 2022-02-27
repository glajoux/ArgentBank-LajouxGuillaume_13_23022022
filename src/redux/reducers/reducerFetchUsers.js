import {
  LOAD_USER,
  LOAD_USER_SUCCES,
  LOAD_USER_ERROR,
} from "../constants/constants";
import produce from "immer";

const initialState = {
  isLoading: false,
  data: {
    firstName: null,
    lastName: null,
    email: null,
    password: null,
  },
  token: null,
  error: null,
};

const reducerFetchUsers = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_USER: {
        draft.isLoading = true;
        return;
      }
      case LOAD_USER_SUCCES: {
        draft.isLoading = false;
        draft.data = action.payload; // Pas sur !!!
        draft.token = action.payload; // Pas sur !!!
        draft.error = null;
        return;
      }
      case LOAD_USER_ERROR: {
        draft.isLoading = false;
        draft.data = null;
        draft.token = null;
        draft.error = action.payload;
        return;
      }
      default:
        return;
    }
  });
};

export default reducerFetchUsers;
