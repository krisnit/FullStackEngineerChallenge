import {
  FETCH_EMPLOYEES,
  CREATE_EMPLOYEE,
  CREATE_REVIEW,
  FETCH_REVIEWS
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

export const modifyEmployee = data => async dispatch => {
  let token = localStorage.getItem("token");
  let config = { headers: { "x-auth-token": token } };
  let modifiedUser = { username: data.username, email: data.email };
  try {
    console.log(data, modifiedUser);
    let emp = await axios.put(
      `http://localhost:5000/api/users/${data._id}`,
      modifiedUser,
      config
    );
    if (emp) {
      fetchEmployees();
    }
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

export const fetchReviewsUser = id => async dispatch => {
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

export const fetchReviewsAll = () => async dispatch => {
  let token = localStorage.getItem("token");
  let config = {
    headers: { "x-auth-token": token }
  };
  try {
    let results = await axios.get("http://localhost:5000/api/reviews", config);
    console.log(results);
    dispatch({ type: FETCH_REVIEWS, payload: results.data.reviews });
  } catch (err) {
    console.log(err.message);
  }
};

export const addEditors = data=>dispatch=>{
  
let token = localStorage.getItem("token");
  let config = {
    headers: { "x-auth-token": token }
  };
  data.map(async d=>{
    let editor={user:d.value}
    try {
    await axios.post(`http://localhost:5000/api/editors/${d.id}`,
    editor, config);
    let results = await axios.get("http://localhost:5000/api/reviews", config);
    console.log(results);
    dispatch({ type: FETCH_REVIEWS, payload: results.data.reviews });
  } catch (err) {
    console.log(err.message);
  }
  })
  
}

export const createReview = data => async dispatch => {
  console.log(data)
  let token = localStorage.getItem("token");
  let config = { headers: { "x-auth-token": token } };
  try {
    await axios.post(`http://localhost:5000/api/reviews`, data, config);
    let results = await axios.get("http://localhost:5000/api/reviews", config);
    dispatch({ type: FETCH_REVIEWS, payload: results.data.reviews });
  } catch (err) {
    console.log(err.message);
  }
};