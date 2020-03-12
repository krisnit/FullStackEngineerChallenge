import {
  FETCH_EMPLOYEES,
  CREATE_EMPLOYEE,
  CREATE_REVIEW,
  FETCH_REVIEWS
} from "../actions/types";
const initialState = {
  employees: [],
  reviews: []
};

const adminReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case FETCH_EMPLOYEES:
      return { ...state, employees: payload };
    case CREATE_EMPLOYEE:
      return { ...state, employees: [...state.employees, payload] };
    case FETCH_REVIEWS:
      return { ...state, reviews: payload };
    case CREATE_REVIEW:
      return { ...state, reviews: [...state.reviews, payload] };
    default:
      return state;
  }
};

export default adminReducer;
