import React from 'react';
import styles from './Set.module.css';


const Set = (props) => {
    return (
    <div className={styles.set}>  
        <p>{props.name}</p>
    </div>
    )
}

export default Set;

