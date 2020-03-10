import { FETCH_EMPLOYEES, MODIFY_EMPLOYEES } from "../actions/types";
import axios from "axios";
export const fetchEmployees = () => async dispatch => {
  let token = localStorage.getItem("token");
  let config = {
    headers: { "x-auth-token": token }
  };
  let results = await axios.get("http://localhost:5000/api/users", config);
  dispatch({ type: FETCH_EMPLOYEES, payload: results.data.users });
};

export const modifyEmployees = data => async dispatch => {
  let token = localStorage.getItem("token");
  let config = { headers: { "x-auth-token": token } };
  let emp = await axios.put(
    `http://localhost:5000/api/users/${data.id}`,
    data,
    config
  );
  dispatch({ type: MODIFY_EMPLOYEES, payload: { ...emp } });
};
