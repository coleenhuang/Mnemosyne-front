import React from 'react';
import styles from './Folder.module.css'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { useHistory } from 'react-router-dom'

const Folder = (props) => {
    const history = useHistory();
    const handleClick = () => {
        props.fetchSets(props.folder_id)
        history.push(`folder/${props.name}`)
    }
    return (
    <div className={styles.folder} onClick={handleClick}>
        <h2>{props.name}</h2>
    </div>);
}

 


export default connect(null, actions)(Folder);