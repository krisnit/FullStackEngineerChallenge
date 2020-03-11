import React from "react";
import { connect } from "react-redux";
import { loginSuccess, loginWithToken } from "../../redux/actionCreators/auth";
import { Redirect } from "react-router-dom";
const Index = props => {
  let [details, setDetails] = React.useState({ email: "", password: "" });
  const handleSubmit = async e => {
    e.preventDefault();
    let { email, password } = details;
    props.loginSuccess(email, password);
  };
  React.useEffect(() => {
    props.loginWithToken();
  }, []);
  const handleChange = e => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  if (props.auth.isAuthenticated && props.auth.isAdmin) {
    return <Redirect to="/admin" />;
  }
  if (props.auth.isAuthenticated) {
    return <Redirect to="/user" />;
  }
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return { auth: state.authReducer };
};
const mapDispatchToProps = dispatch => {
  return {
    loginSuccess: (email, password) => dispatch(loginSuccess(email, password)),
    loginWithToken: () => dispatch(loginWithToken())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
