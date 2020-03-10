import {
  FETCH_EMPLOYEES,
  MODIFY_EMPLOYEES,
  CREATE_EMPLOYEE
} from "../actions/types";
import axios from "axios";
export const fetchEmployees = () => async dispatch => {
  let token = localStorage.getItem("token");
  let config = {
    headers: { "x-auth-token": token }
  };
  try {
    let results = await axios.get("http://localhost:5000/api/users", config);
    dispatch({ type: FETCH_EMPLOYEES, payload: results.data.users });
  } catch (err) {
    console.log(err.message);
  }
};

export const modifyEmployees = data => async dispatch => {
  let token = localStorage.getItem("token");
  let config = { headers: { "x-auth-token": token } };
  try {
    let emp = await axios.put(
      `http://localhost:5000/api/users/${data.id}`,
      data,
      config
    );
    dispatch({ type: MODIFY_EMPLOYEES, payload: { ...emp } });
  } catch (err) {
    console.log(err.message);
  }
};

export const createEmployee = data => async dispatch => {
  let token = localStorage.getItem("token");
  let config = { headers: { "x-auth-token": token } };
  try {
    await axios.post(`http://localhost:5000/api/users/`, data, config);
    dispatch({ type: CREATE_EMPLOYEE, payload: { ...data } });
  } catch (err) {
    console.log(err.message);
  }
};

export const fetchReviews = id => async dispatch => {
  let token = localStorage.getItem("token");
  let config = { headers: { "x-auth-token": token } };
  try {
    let results = await axios.get(
      `http://localhost:5000/api/users/${id}`,
      config
    );
    console.log(results);
  } catch (err) {
    console.log(err.message);
  }
};
