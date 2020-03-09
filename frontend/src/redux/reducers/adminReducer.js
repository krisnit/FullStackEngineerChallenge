const initialState = {
  employees: [],
  reviews: []
};

const adminReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case FETCH_EMPLOYEES:
      return { ...state, employees: payload };
    default:
      return state;
  }
};
