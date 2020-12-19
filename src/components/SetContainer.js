import React from 'react';
import { useParams } from 'react-router-dom';

const SetContainer = () => {
    let params = useParams();
    return <div>Current parameter is {params.name}</div>
}

export default SetContainer;