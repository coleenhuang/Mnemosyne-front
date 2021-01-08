import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'
import { useParams } from 'react-router-dom';
import Controls from './Controls';
import Card from './Card'


const CardContainer = (props) => {
    const params = useParams();
    const isParts = params.name === 'parts'
    const cardList = isParts? props.parts : props.vocab
    const [index, setIndex] = useState(0)

    const nextCard = () => setIndex(index + 1)
    const prevCard = () => setIndex(index - 1)

    return (
    <div>
        {renderCards(cardList, isParts, index)}
        <Controls cardIndex={index} listLength={cardList.length} next={nextCard} prev={prevCard}/>
    </div>)
}


function renderCards(cardData, parts, index) {
    //parts is a boolean
    if (cardData.length > 0) {
        if (parts) {
            let cardInfo = createCards(cardData[index])
            return <Card front={cardInfo.front} def={cardInfo.def} otherParts={cardInfo.otherParts}/>
        }
        else {
            console.log(cardData)
            return <Card front={cardData[index].word} def={cardData[index].def_en}/>
        }  
    }
    else {
        return null
    }

}

function createCards(card) {
    const info = {
        id: card.id, 
        front: card.present, 
        otherParts: [card.future, card.aorist, card.perfect, card.prf_mid_pass, card.aor_pass],
        def: card.def_en
    }
    return info
}

function mapStateToProps(state) {
    return {  
        parts: state.parts,
        vocab: state.vocab,
        index: state.cardIndex
    }
}

export default connect(mapStateToProps, actions)(CardContainer);