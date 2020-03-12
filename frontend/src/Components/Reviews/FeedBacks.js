import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import './feedbacks.scss'

const FeedBacks = ({feedbacks,employees}) => {

    return (

        <div className="feedbacks">
        <h4>Feedbacks from other Users</h4>
            <div className="feebacks__header">
                <div>Feedback</div>
                <div>Given By</div>
            </div>
            {feedbacks.map(fb=>(
                <div key={fb._id}>
                <div>{fb.feedback}</div>
                <div>{(employees.find(emp=>emp._id===fb.user)).username}</div>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = ({ adminReducer }) => ({
  reviews: adminReducer.reviews,
  employees: adminReducer.employees
});

const mapDispatchToProps = dispatch => ({
  //   fetchReviewsAll: () => dispatch(fetchReviewsAll())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(FeedBacks));