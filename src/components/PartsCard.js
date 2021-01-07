import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'

const PartsCard = (props) => {
    const [flip, setFlip] = useState(true)
    
    const renderParts = () => {
        if (props.parts.length > 0) {
            createCards(props.parts[props.index])
        }
        else {
            return null
        }
    }

    return (
        <div>{}</ div>
    )
}

function createCards(card) {
    const info = {
        id: card.id, 
        front: card.present, 
        back: [card.future, card.aorist, card.perfect, card.prf_mid_pass, card.aor_pass],
        def: card.def_en
    }
    return info
}

/*<div className='flip_container' onClick={() => setFlip(!flip)}>
            <div className={
                `front card_face flex_container ${flip?'visible':'hidden'}`}>
                    <p>{cardInfo.front}</p>
            </div>
            <div className={`back flex_container card_face ${flip?'hidden':'visible'}`}>
                <p>{cardInfo.def}</p>
                <ul>
                    {renderParts(cardInfo.back)}
                </ul>
            </div>
            </div>*/

function renderParts(list) {
return list.map((part, index) => <li key={index}> {part}</li>)
}

function mapStateToProps(state) {
    return {
        parts: state.parts,
        index: state.cardIndex
    }
}

export default connect(mapStateToProps)(PartsCard);