import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import Controls from './Controls';


const CardContainer = () => {
    return (
    <div>
        <Card />
        <Controls />
    </div>)
}



export default CardContainer;