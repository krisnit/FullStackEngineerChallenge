import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
const AdminRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        auth.isAuthenticated && auth.isAdmin ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

const mapState = state => ({ auth: state.authReducer });

export default connect(mapState)(AdminRoute);
