import React from "react";
import { createReview } from "../../redux/actionCreators/admin";
import { connect } from "react-redux";
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import {withRouter} from 'react-router-dom'

// import "./CreateEmployee.scss";
let initialState = {
  user: "",
  instructions: "",
  name: "",
  editors: []
};

const CreateReview = ({employees, createReview,match }) => {
  let [review, setReview] = React.useState(initialState);
  let options= employees.map(({_id,username})=>({label:username,value:_id}))
  const handleChange = e => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };
  let user=employees.filter(({_id})=>(_id===match.params.id))
  React.useEffect(()=>{
setReview({...review, user: match.params.id, username:user[0].username})
  },[])
  const handleSubmit = e => {
    e.preventDefault();
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
          <label forname="instructions">Suggesstions or Instructions</label>
          <input onChange={handleChange} type="textarea" name="instructions" value={review.instructions} />
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
