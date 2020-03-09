import { FETCH_EMPLOYEES } from "../actions/types";
import axios from "axios";
export const fetchEmployees = () => async dispatch => {
  let token = localStorage.getItem("token");
  let config = {
    headers: { "x-auth-token": token }
  };
  let results = await axios.get("http://localhost:5000/api/users", config);
  console.log(results);
  return { type: FETCH_EMPLOYEES, payload: results.data.users };
};
