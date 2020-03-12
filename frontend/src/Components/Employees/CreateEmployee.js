import React from "react";
import { createEmployee } from "../../redux/actionCreators/admin";
import { connect } from "react-redux";
import "./CreateEmployee.scss";
let initialState = {
  username: "",
  email: "",
  password: "",
  admin: false
};

const CreateEmployee = ({ createEmployee }) => {
  let [user, setUser] = React.useState(initialState);
  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    createEmployee(user);
    setUser(initialState);
  };
  return (
    <div className="createemployee">
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label forname="username">UserName</label>
          <input onChange={handleChange} type="text" name="username" />
        </div>
        <div>
          <label forname="email">Email</label>
          <input onChange={handleChange} type="email" name="email" />
        </div>
        <div>
          <label forname="password">Password</label>
          <input onChange={handleChange} type="password" name="password" />
        </div>
        <div>
          <input className="btn" type="Submit" value="Create" />
        </div>
      </form>
    </div>
  );
};
const mapDispatch = dispatch => ({
  createEmployee: data => dispatch(createEmployee(data))
});

export default connect(undefined, mapDispatch)(CreateEmployee);
