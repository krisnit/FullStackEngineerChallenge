import React from "react";
import { createReview } from "../../redux/actionCreators/admin";
import { connect } from "react-redux";
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import {withRouter} from 'react-router-dom'

// import "./CreateEmployee.scss";
let initialState = {
  user: "",
  comments: "",
  name: "",
  editors: []
};

const CreateReview = ({employees, createReview,match }) => {
  let [review, setReview] = React.useState(initialState);
  let options= employees.map(({_id,username})=>({label:username,value:_id}))
  const handleChange = e => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };
  React.useEffect(()=>{
setReview({...review, user: match.params.id})
  },[])
  const handleSubmit = e => {
    e.preventDefault();
    console.log(review,match.params.id,match)
    createReview(review);
    setReview(initialState);
  };
  return (
    <div className="createreview">
      <h1>Create Review</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label forname="name">Performance Review For</label>
          <input onChange={handleChange} type="text" name="name" value={review.name}/>
        </div>
        <div>
          <label forname="comments">Suggesstions or Comments</label>
          <input onChange={handleChange} type="textarea" name="comments" value={review.comments} />
        </div>
        <div>
          <label forname="editors">Ask feeback from Others</label>
            <ReactMultiSelectCheckboxes
           onChange={(e)=>setReview({...review, editors:e})} options={options} />
        </div>
        <div>
          <input className="btn" type="Submit" value="Create Review" />
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = ({ adminReducer }) => ({
  employees: adminReducer.employees
});

const mapDispatch = dispatch => ({

  createReview: data => dispatch(createReview(data))
});

export default connect(mapStateToProps, mapDispatch)(withRouter(CreateReview));
