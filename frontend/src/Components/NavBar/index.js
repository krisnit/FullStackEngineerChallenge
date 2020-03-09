import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { connect } from "react-redux";
import { logout } from "../../redux/actionCreators/auth";
const Index = props => {
  const { isAuthenticated, isAdmin } = props.auth;
  return (
    <div>
      <nav className="navbar__main">
        <h2 className="navbar__heading">PayPay</h2>
        <ul className="navbar__links">
          <li>
            {isAuthenticated ? (
              <Link onClick={props.logout} to="/login">
                Logout
              </Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

const mapState = state => {
  return { auth: state.authReducer };
};
const mapDispatch = dispatch => ({ logout: () => dispatch(logout()) });
export default connect(mapState, mapDispatch)(Index);
