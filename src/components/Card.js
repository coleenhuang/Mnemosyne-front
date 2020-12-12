import React, { useState } from 'react';
import styles from './Card.module.css';

const Card = (props) => {
    const [flip, setFlip] = useState(true)
    
    return (
        <div className={styles.flip_container} onClick={() => setFlip(!flip)}>
            <div className={
                `${styles.front} ${styles.card_face} ${flip?styles.visible:styles.hidden}`}>
                    Front
            </div>
            <div className={`${styles.back} ${styles.card_face} ${flip?styles.hidden:styles.visible}`}>Back</div>
        </div>
    )
}

export default Card;