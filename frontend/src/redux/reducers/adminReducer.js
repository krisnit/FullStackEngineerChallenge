import {
  FETCH_EMPLOYEES,
  MODIFY_EMPLOYEES,
  CREATE_EMPLOYEE
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
    case MODIFY_EMPLOYEES:
      let employeeIndex = state.employees.findIndex(a => a.id === payload.id);
      let modifiedEmployee = {
        ...state.employees[employeeIndex],
        ...payload
      };
      let modifiedEmployees = [
        state.employees.slice(0, employeeIndex),
        modifiedEmployee,
        state.employees.slice(employeeIndex + 1)
      ];
      return { ...state, employees: modifiedEmployees };
    default:
      return state;
  }
};

export default adminReducer;
