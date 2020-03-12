import { GET_REVIEWS_USER, PENDING_FEEDBACKS_USER } from "../actions/types";
import axios from "axios";

export const getReviews = (id) => async dispatch => {
  let token = localStorage.getItem("token");
  let config = { headers: { "x-auth-token": token } };
  let reviews = await axios.get(
    `http://localhost:5000/api/reviews/user/${id}`,
    config
  );
  dispatch({ type: GET_REVIEWS_USER, payload: reviews.data });
};

export const pendingFeedbacks = (id) => async dispatch => {
  let token = localStorage.getItem("token");
  let config = { headers: { "x-auth-token": token } };
  let reviews = await axios.get(
    `http://localhost:5000/api/reviews/editor/${id}`,
    config
  );
  dispatch({ type: PENDING_FEEDBACKS_USER, payload: reviews.data.feedback });
};


