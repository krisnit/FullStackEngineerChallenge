import { GET_REVIEWS, PENDING_FEEDBACKS } from "../actions/types";
const initialState = {
  reviews: [],
  feedbacks: []
};

const userReducer = (state = { initialState }, action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_REVIEWS:
      return { ...state, reviews: payload };
    case PENDING_FEEDBACKS:
      return { ...state, feedbacks: payload };
    default:
      return state;
  }
};

export default userReducer;
