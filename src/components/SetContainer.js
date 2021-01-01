import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom'
import Set from './Set'
import * as actions from '../actions'


const SetContainer = (props) => {
    const history = useHistory();
    const handleClick = () => {
        props.fetchParts()
        history.push('/set/parts')
    }
    return (
    <div>
        {renderSets(props.setList)}
        <div className='card' onClick={handleClick}>
            <p>Principal Parts</p>
        </div>
    </div>
    )
}

function renderSets(setList) {
    if (setList.length > 0) {
        return setList.map((set, index) => 
        <Set key={index} name={set.set_name} set_id={set.id}/>)
    }
    else {
        return null
    }
    
}


function mapStateToProps(state) {
    return {
        setList: state.sets
    }
}

export default connect(mapStateToProps, actions)(SetContainer);