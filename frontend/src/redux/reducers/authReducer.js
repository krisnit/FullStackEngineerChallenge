import { LOGIN_SUCCESS, LOGIN_FAILED } from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  loading: true,
  user: null,
  isAdmin: false
};

const authReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      return { ...state, ...payload, isAuthenticated: true, loading: false };
    case LOGIN_FAILED:
      return { ...state, ...payload, isAuthenticated: false, loading: false };
    default:
      return state;
  }
};

export default authReducer;
