import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Controls from './Controls';
import VocabCard from './VocabCard';
import PartsCard from './PartsCard';

const CardContainer = () => {
    const params = useParams()
    return (
    <div>
        {params.name === 'parts'? <PartsCard /> : <VocabCard />}
        <Controls />
    </div>)
}



export default CardContainer;