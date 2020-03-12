import React from "react";
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import './PendingFeedbacks.scss'

const PendingFeedbacks = ({feedbacks,match}) => {
  let [comment,setComment] =React.useState('')
  let id=match.params.id
  let data=feedbacks.map(feedback=>{
   let b = feedback.editors.filter(edit=>edit.value===id && edit.feedbacks==="")
   return {...b[0], user:feedback.user, name:feedback.name}
   })
   let handleChange=e=>{
     setComment(e.target.value)
   }
  let handleSubmit= (e)=>{
    e.preventDefault()
    console.log(comment)
  }
  return <div>
  {data.map(a=>(<div className="feedback" key={a._id}>
  <p>You have Pending feedback to be given for {a.name}.</p>
  <textarea name="feedback" onChange={handleChange}/>
  <button onClick={handleSubmit}>Submit</button>
  </div>))}
  </div>;
};
const mapStateToProps = ({ userReducer }) => ({
  feedbacks: userReducer.feedbacks

});

export default connect(
  mapStateToProps
)(withRouter(PendingFeedbacks));
