import axios from "axios";
import produce from "immer";
import { selectUsers } from "../selectors/selectors";

const initialState = {
  status: "void",
  auth: {
    token: null,
  },
  data: {
    firstName: null,
    lastName: null,
    email: null,
    password: null,
  },
  error: null,
};

const FETCHING = "user/fetching";
const RESOLVED = "user/resolved";
const REJECTED = "user/rejected";

export const userFetching = () => ({ type: FETCHING });
export const userResolved = (data) => ({ type: RESOLVED, payload: data });
export const userRejected = (error) => ({ type: REJECTED, payload: error });

export async function fetchOrUpdateUser(store, data) {
  const status = selectUsers(store.getState()).status;
  if (status === "pending" || status === "updating") {
    return;
  }
  store.dispatch(userFetching());
  const response = await axios.post(
    "http://localhost:3001/api/v1/user/login",
    data
  );
  const resData = await response.data.body;
  store.dispatch(userResolved(resData));
}

export default function userReducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case FETCHING: {
        if (draft.status === "void") {
          draft.status = "pending";
          return;
        }
        if (draft.status === "rejected") {
          draft.error = null;
          draft.status = "pending";
          return;
        }
        if (draft.status === "resolved") {
          draft.status = "updating";
          return;
        }
        return;
      }
      case RESOLVED: {
        if (draft.status === "pending ") {
          draft.status = "resolved";
          draft.data = action.payload;
        }
        return;
      }
      case REJECTED: {
        if (draft.status === "pending" || draft.status === "updating") {
          draft.error = action.payload;
          draft.data = null;
          draft.status = "rejected";
        }
        return;
      }
      default:
        return;
    }
  });
}
