import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'
import styles from './Controls.module.css'

const Controls = (props) =>{
    return (
        <div className={styles.control_container}>
            <button disabled={props.cardIndex === 0} onClick={props.prev}>back</button>
            <span>{`< ${props.cardIndex + 1} / ${props.listLength} >`}</span>
            <button disabled={(props.cardIndex+1) === props.listLength} onClick={props.next}>next</button>
        </div>
    )

}

export default Controls;