import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Review from './Review'
import FeedBacks from './FeedBacks'
import BackButton from '../Landing/BackButton'
import AskFeedback from './AskFeedback'
import CreateReview from './CreateReview'

const FetchReviews = props => {

  let id = props.match.params.id;
  let data = props.reviews.map(review => {
    if (review.user === id) {
      return (
        <div key={review._id}>
        <Review id={review._id} name={review.name} comments={review.comments}
         />
        {review.feedbacks.length >0 && 
        <FeedBacks feedbacks={review.feedbacks}/>}
        <AskFeedback reviewid={review._id} editors={review.editors}/>
        </div>
      );
    }
  });

  return (
    <div>
    <CreateReview />
      <h2>All Reviews</h2>
      <BackButton loc={"/admin"}/>
      {data}
    </div>
  );
};

const mapStateToProps = ({ adminReducer }) => ({
  reviews: adminReducer.reviews
});

const mapDispatchToProps = dispatch => ({
  //   fetchReviewsAll: () => dispatch(fetchReviewsAll())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(FetchReviews));
