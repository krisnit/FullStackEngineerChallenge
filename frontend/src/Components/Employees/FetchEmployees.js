import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchEmployees } from "../../redux/actionCreators/admin";
import "./FetchEmployees.scss";
import CreateEmployee from "./CreateEmployee";
import { withRouter } from "react-router-dom";

const FetchEmployees = ({ fetchEmployees, data, history }) => {
  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  return (
    <div className="employeelist">
      <h1>Welcome to Admin Page</h1>
      <CreateEmployee />
      <h3 className="employeelist__heading">List of Employees</h3>
      <div className="employeelist__main">
        <div className="employeelist__header">
          <div>UserName</div>
          <div>Email</div>
          <div>Status</div>
          <div>Modify</div>
          <div>Delete</div>
        </div>
        <div className="employeelist__content">
          {data.map(emp => {
            return (
              <div key={emp._id}>
                <div>{emp.username}</div>
                <div>{emp.email}</div>
                <div>{emp.admin ? "Admin" : "User"}</div>
                <button
                  onClick={() => {
                    history.push(`/admin/edit/${emp._id}`);
                  }}>
                  Modify
                </button>
                <button>Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ adminReducer }) => ({
  data: adminReducer.employees
});

const mapDispatchToProps = dispatch => ({
  fetchEmployees: () => dispatch(fetchEmployees())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(FetchEmployees));
