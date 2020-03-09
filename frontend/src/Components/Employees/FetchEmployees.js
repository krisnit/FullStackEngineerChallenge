import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchEmployees } from "../../redux/actionCreators/admin";

const FetchEmployees = ({ fetchEmployees }) => {
  useEffect(() => {
    fetchEmployees();
  }, []);
  return (
    <div>
      <h1>Welcome to Admin Page</h1>
    </div>
  );
};
const mapStateToProps = state => {};

const mapDispatchToProps = dispatch => ({
  fetchEmployees: () => dispatch(fetchEmployees())
});

export default connect(mapStateToProps, mapDispatchToProps)(FetchEmployees);
