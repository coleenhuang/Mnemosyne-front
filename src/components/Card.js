import React from 'react';
import styles from './Card.module.css';

const Card = () => {
    return (
        <div className={'flipper'}>
            <div className={`${styles.front} ${styles.card}`}>Front</div>
            <div className={`${styles.back} ${styles.card}`}>Back</div>
        </div>
    )
}

export default Card;