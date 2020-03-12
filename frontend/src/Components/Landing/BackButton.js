import React from 'react'
import {withRouter} from 'react-router-dom'

const BackButton = ({loc,history}) => {
    return (
    <button onClick={()=>history.push(loc)}>Back</button>
    )
}

export default withRouter(BackButton)
