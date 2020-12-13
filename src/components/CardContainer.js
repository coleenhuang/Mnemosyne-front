import React, {useState} from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import Controls from './Controls';


const CardContainer = () => {
    const [index, setIndex] = useState(0)
    return (
    <div>
        <Card index={index}/>
        <Controls index={index}/>
    </div>)
}



export default CardContainer;