import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Set from './Set'
import * as actions from '../actions'


const SetContainer = (props) => {
    //need to populate the container on initial render
    useEffect(() => {
        return () => {
            props.clearSets();
        };
      }, []);
    return (
    <div>
        {renderSets(props.setList)}
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