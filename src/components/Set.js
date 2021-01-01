import React from 'react';
import * as actions from '../actions'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

const Set = (props) => {
    const history = useHistory();
    const handleClick = () => {
        props.fetchVocab(props.set_id)
        history.push(`/set/${props.name}`)
    }
    return (
    <div className='card' onClick={handleClick}>  
        <p>{props.name}</p>
    </div>
    )
}

export default connect(null, actions)(Set);

