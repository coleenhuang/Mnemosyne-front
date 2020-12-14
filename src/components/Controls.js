import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'
import styles from './Controls.module.css'

const Controls = (props) =>{
    return (
        <div className={styles.control_container}>
            <button disabled={props.index === 0}onClick={props.prevCard}>back</button>
            <span>{`< ${props.index + 1} / ${props.listLength} >`}</span>
            <button disabled={(props.index+1) === props.listLength} onClick={props.nextCard}>next</button>
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