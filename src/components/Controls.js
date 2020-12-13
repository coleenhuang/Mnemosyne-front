import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'

const Controls = (props) =>{
    return (
        <div>
            <button>back</button>
            <span>{`< ${props.index + 1} / 6 >`}</span>
            <button>next</button>
        </div>
    )

}
function mapStateToProps(state) {
    return {index: state.cardIndex}
}
export default connect(mapStateToProps, actions)(Controls);