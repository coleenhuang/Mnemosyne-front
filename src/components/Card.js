import React, { useState } from 'react';
import styles from './Card.module.css';

const Card = () => {
    const [show, setShow] = useState(true)
    //FIXME: need to somehow nest the front and back of the card on top of one another
    return (
        <div className={styles.flipper} onClick={() => setShow(!show)}>
            <div className={`${styles.front} ${styles.card_face} ${show?styles.visible:styles.hidden}`}>Front</div>
            <div className={`${styles.back} ${styles.card_face} ${show?styles.hidden:styles.visible}`}>Back</div>
        </div>
    )
}

export default Card;