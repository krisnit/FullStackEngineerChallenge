import { GET_REVIEWS, PENDING_FEEDBACKS } from "../actions/types";
import axios from "axios";

export const getReviews = () => async dispatch => {
  let token = localStorage.getItem("token");
  let config = { headers: { "x-auth-token": token } };
  let user = await axios.get("http://localhost:5000/api/auth", config);
  let id = user.data.user._id;
  let reviews = await axios.get(
    `http://localhost:5000/api/reviews/${id}`,
    config
  );
  console.log(reviews);
  dispatch({ type: GET_REVIEWS, payload: reviews.data });
};
