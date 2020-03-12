import React from "react";
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import './GetReviews.scss'


const GetReviews = ({reviews,match}) => {
return <div className="getreviews">
<h2>List of Pending Performance Reviews</h2>
{reviews.map(review=>{
  if(!review.comments){
  return (<div key={review._id}>
  <h4>Action Needed for Review {review.name}</h4>
  <p>{review.instructions}</p>
  <textarea value=""></textarea>
  <button>Submit</button>
  </div>)}
  })
}
</div>;
};

const mapStateToProps = ({ userReducer }) => ({
  reviews: userReducer.reviews
});

const mapDispatchToProps = dispatch => ({
  //   fetchReviewsAll: () => dispatch(fetchReviewsAll())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(GetReviews));
