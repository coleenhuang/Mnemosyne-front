import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'

const Controls = (props) =>{
    return (
        <div>
            <button onClick={props.prevCard}>back</button>
            <span>{`< ${props.index + 1} / ${props.listLength} >`}</span>
            <button onClick={props.nextCard}>next</button>
        </div>
    )

}
function mapStateToProps(state) {
    return {
        index: state.cardIndex,
        listLength: state.cardsList.length
        }
}
export default connect(mapStateToProps, actions)(Controls);