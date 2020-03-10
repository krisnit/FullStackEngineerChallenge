import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchEmployees,
  modifyEmployees
} from "../../redux/actionCreators/admin";
import "./FetchEmployees.scss";
import CreateEmployee from "./CreateEmployee";

const FetchEmployees = ({ fetchEmployees, data, modifyEmployees }) => {
  let [modify, setModify] = React.useState({
    state: false,
    id: null
  });
  let [userData, setUserData] = React.useState({
    id: modify.id,
    username: null,
    email: null,
    admin: null
  });

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  const handleChange = e => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleData = () => {
    let user = data.findIndex(user => user._id === modify.id);
    setUserData({ user });
  };

  let fixed = emp => (
    <>
      <div>{userData.username || emp.username}</div>
      <div>{userData.email || emp.email}</div>
      <div>{emp.admin ? "Admin" : "User"}</div>
    </>
  );

  let modifyData = emp => (
    <>
      <input
        type="text"
        name="username"
        onChange={handleChange}
        defaultValue={userData.username || emp.username}
      />
      <input
        type="text"
        name="email"
        onChange={handleChange}
        defaultValue={userData.email || emp.email}
      />
      <div>{emp.admin ? "Admin" : "User"}</div>
    </>
  );

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
              <div key={emp._id} className="employee">
                {modify.state && modify.id === emp._id
                  ? modifyData(emp)
                  : fixed(emp)}
                <button
                  onClick={() => {
                    setModify({ state: !modify.state, id: emp._id });
                    handleData();
                    if (modify.state) {
                      console.log(userData);
                      // modifyEmployees({
                      //   id: modify.id,
                      //   username: modify.username,
                      //   email: modify.email,
                      //   admin: modify.admin
                      // });
                    }
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
  fetchEmployees: () => dispatch(fetchEmployees()),
  modifyEmployees: data => dispatch(modifyEmployees(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(FetchEmployees);
