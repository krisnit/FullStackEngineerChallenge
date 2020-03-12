import React from 'react'
import './Review.scss'
const Review = ({id,name,comments,feedbacks}) => {
    return (<div className="review">
        <h4> >> Performance Review for {name}</h4>
<div key={id}>
          <div>
            <label>Employee Comments</label>
            <textarea defaultValue={comments} />
          </div>
        </div>
        </div>
    )
}

export default Review
