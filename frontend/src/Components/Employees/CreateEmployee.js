import React from "react";
import { createEmployee } from "../../redux/actionCreators/admin";
import { connect } from "react-redux";

const CreateEmployee = ({ createEmployee }) => {
  let [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
    admin: false
  });
  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    createEmployee(user);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label forname="username">UserName</label>
        <input onChange={handleChange} type="text" name="username" />
        <label forname="email">Email</label>
        <input onChange={handleChange} type="text" name="email" />
        <label forname="password">Password</label>
        <input onChange={handleChange} type="text" name="password" />
        <input type="Submit" />
      </form>
    </div>
  );
};
const mapDispatch = dispatch => ({
  createEmployee: data => dispatch(createEmployee(data))
});

export default connect(undefined, mapDispatch)(CreateEmployee);
