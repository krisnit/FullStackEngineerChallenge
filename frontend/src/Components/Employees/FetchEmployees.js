import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchEmployees,
  fetchReviewsAll
} from "../../redux/actionCreators/admin";
import "./FetchEmployees.scss";
import CreateEmployee from "./CreateEmployee";
import { withRouter, Link } from "react-router-dom";

const FetchEmployees = ({
  fetchEmployees,
  fetchReviewsAll,
  data,
  history,
  reviews
}) => {
  useEffect(() => {
    fetchReviewsAll();
    fetchEmployees();
  }, []);

  return (
    <div className="employeelist">
      <h1>Welcome to Admin Page</h1>
      <CreateEmployee />
      <h3 className="employeelist__heading">List of Users</h3>
      <div className="employeelist__main">
        <div className="employeelist__header">
          <div>UserName</div>
          <div>Email</div>
          <div>Total Reviews</div>
          <div>Modify</div>
          <div>Delete</div>
        </div>
        <div className="employeelist__content">
          {data.length > 1 &&
            data.map(emp => {
              if (!emp.admin) {
                return (
                  <div key={emp._id} className="employee">
                    <div>{emp.username}</div>
                    <div>{emp.email}</div>
                    <div>
                      <Link to={`/admin/reviews/${emp._id}`}>
                        {reviews.reduce((count, r) => {
                          if (r.user === emp._id) count += 1;
                          return count;
                        }, 0)}
                      </Link>
                    </div>
                    <button
                      className="modify"
                      onClick={() => {
                        history.push(`/admin/edit/${emp._id}`);
                      }}>
                      Modify
                    </button>
                    <button className="delete">Delete</button>
                  </div>
                );
              }
            })}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ adminReducer }) => ({
  data: adminReducer.employees,
  reviews: adminReducer.reviews
});

const mapDispatchToProps = dispatch => ({
  fetchEmployees: () => dispatch(fetchEmployees()),
  fetchReviewsAll: () => dispatch(fetchReviewsAll())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(FetchEmployees));
