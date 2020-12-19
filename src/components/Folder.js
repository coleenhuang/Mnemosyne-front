import React from 'react';
import styles from './Folder.module.css'
import { connect } from 'react-redux'
import * as actions from '../actions'

const Folder = (props) => {
    return (
    <div className={styles.folder} onClick={() => props.fetchSets(props.folder_id)}>
        <h2>{props.name}</h2>
    </div>);
}

export default connect(null, actions)(Folder);