import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { modifyEmployee } from "../../redux/actionCreators/admin";

const ModifyEmployee = props => {
  let [user, setUser] = React.useState({ id: "", username: "", email: "" });
  React.useEffect(() => {
    let id = props.match.params.id;
    let currentUser = props.data.filter(user => user._id === id);
    setUser(...currentUser);
  }, []);

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    props.modifyEmployee(user);
    props.history.push("/admin");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label forname="username">UserName</label>
        <input
          onChange={handleChange}
          type="text"
          name="username"
          value={user.username}
        />
        <label forname="email">Email</label>
        <input
          onChange={handleChange}
          type="text"
          name="email"
          value={user.email}
        />
        <input type="Submit" />
      </form>
    </div>
  );
};
const mapState = ({ adminReducer }) => {
  return { data: adminReducer.employees };
};
const mapProps = dispatch => {
  return { modifyEmployee: data => dispatch(modifyEmployee(data)) };
};

export default connect(mapState, mapProps)(withRouter(ModifyEmployee));
