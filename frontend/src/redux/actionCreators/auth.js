import { LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT } from "../actions/types";
import axios from "axios";
import setToken from "../utils/setToken";

export const loginSuccess = (email, password) => async dispatch => {
  let config = {
    headers: { "Content-Type": "application/json" }
  };
  let details = { email, password };
  let body = JSON.stringify(details);
  try {
    let token = await axios.post(
      "http://localhost:5000/api/auth",
      body,
      config
    );
    localStorage.setItem("token", token.data.token);
    setToken(token.data.token);
    let user = await axios.get("http://localhost:5000/api/auth");
    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        user: user.data.user._id,
        isAdmin: user.data.user.admin
      }
    });
  } catch (err) {
    localStorage.removeItem("token");
    dispatch({
      type: LOGIN_FAILED,
      payload: {
        user: null,
        isAdmin: false
      }
    });
    console.log("error", err.message);
  }
};

export const logout = () => dispatch => {
  localStorage.removeItem("token");
  return dispatch({ type: LOGOUT });
};

export const loginWithToken = () => async dispatch => {
  let token = localStorage.getItem("token");
  if (token) {
    setToken(token);
    try {
      let user = await axios.get("http://localhost:5000/api/auth");
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          user: user.data.user._id,
          isAdmin: user.data.user.admin
        }
      });
    } catch (err) {
      localStorage.removeItem("token");
      dispatch({
        type: LOGIN_FAILED,
        payload: {
          user: null,
          isAdmin: false
        }
      });
      console.log("error", err.message);
    }
  }
};
