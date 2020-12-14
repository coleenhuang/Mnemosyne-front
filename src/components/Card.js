import React, { useState } from 'react';
import { connect } from 'react-redux';
import styles from './Card.module.css';

const Card = (props) => {
    const [flip, setFlip] = useState(true)
    
    return (
        <div className={styles.flip_container} onClick={() => setFlip(!flip)}>
            <div className={
                `${styles.front} ${styles.card_face} ${styles.flex_container} ${flip?styles.visible:styles.hidden}`}>
                    <p>{props.card.front}</p>
            </div>
            <div className={`${styles.back} ${styles.flex_container} ${styles.card_face} ${flip?styles.hidden:styles.visible}`}>
                <p>{props.card.def}</p>
                <ul>
                    {renderParts(props.card.back)}
                </ul>
            </div>
        </div>
    )
}
function renderParts(list) {
return list.map((part, index) => <li key={index}> {part}</li>)
}

function mapStateToProps(state) {
    return {card: state.cardsList[state.cardIndex]}
}

export default connect(mapStateToProps)(Card);