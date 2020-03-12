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
                <div key={fb.value}>
                <div>{fb.feedback}</div>
                <div>{fb.label}</div>
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