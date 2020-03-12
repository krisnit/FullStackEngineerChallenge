import { GET_REVIEWS_USER, PENDING_FEEDBACKS_USER } from "../actions/types";
const initialState = {
  reviews: [],
  feedbacks: []
};

const userReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_REVIEWS_USER:
      return { ...state, reviews: payload.review };
    case PENDING_FEEDBACKS_USER:
      return { ...state, feedbacks: payload };
    default:
      return state;
  }
};

export default userReducer;
