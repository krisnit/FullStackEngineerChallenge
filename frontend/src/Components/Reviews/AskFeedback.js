import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import {addEditors} from '../../redux/actionCreators/admin'
import './AskFeedback.scss'

const AskFeedback = ({employees,match,addEditors,reviewid,reviews, editors}) => {
  const modifiedEditors = [...new Set(editors)]
  const [editor, setEditor] = React.useState([])
  let options= employees.map(({_id,username})=>({label:username,value:_id,id:reviewid}))
  let users= employees.map(({_id,username})=>{
    if(modifiedEditors.includes(_id)){ return username}
  })
    return (
          <div className='askfeedback'>
          <p>Users to whom feedback already asked: </p>
          <div className="users">
          {users.map(a=><p key={a}>{a}</p>)}
          </div>

           <ReactMultiSelectCheckboxes
           onChange={d=>setEditor(d)} options={options}/>
           <button onClick={()=>addEditors(editor)}>Ask MoreUsers</button>

           </div>
    )
}

const mapStateToProps = ({ adminReducer }) => ({
  employees: adminReducer.employees,
  reviews:adminReducer.reviews
});

const mapDispatchToProps = dispatch => ({
  addEditors: (data) => dispatch(addEditors(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AskFeedback));