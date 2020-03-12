import React from "react";
import GetReviews from './GetReviews'
import {getReviews,pendingFeedbacks} from '../../redux/actionCreators/user'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import PendingFeedbacks from './PendingFeedbacks'
const Index = (props) => {
  React.useEffect(()=>{
    props.getReviews(props.match.params.id)
    props.pendingFeedbacks(props.match.params.id)
  },[])
  return (
    <div>
      <h1>Welcome </h1>
      <GetReviews/>
      <PendingFeedbacks/>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  getReviews: (id) => dispatch(getReviews(id)),
  pendingFeedbacks: (id) => dispatch(pendingFeedbacks(id))
});

export default connect(undefined, mapDispatchToProps)(withRouter(Index));
