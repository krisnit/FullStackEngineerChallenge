import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchEmployees } from "../../redux/actionCreators/admin";
import "./FetchEmployees.scss";

const FetchEmployees = ({ fetchEmployees, data }) => {
  let [modify, setModify] = React.useState({ state: false, id: null });
  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  let fixed = emp => (
    <>
      <div>{emp.username}</div>
      <div>{emp.email}</div>
      <div>{emp.admin ? "Admin" : "User"}</div>
    </>
  );

  let modifyData = emp => (
    <>
      <input type="text" value={emp.username} />
      <input type="text" value={emp.email} />
      <div>{emp.admin ? "Admin" : "User"}</div>
    </>
  );

  return (
    <div className="employeelist">
      <h1>Welcome to Admin Page</h1>
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
              <div key={emp._id} className="employee">
                {modify.state && modify.id === emp._id
                  ? modifyData(emp)
                  : fixed(emp)}
                <button
                  onClick={() => {
                    setModify({ state: !modify.state, id: emp._id });
                  }}>
                  {modify.state && modify.id === emp._id ? "Save" : "Modify"}
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

export default connect(mapStateToProps, mapDispatchToProps)(FetchEmployees);
