import React from 'react';

const Controls = () =>{
    return (
        <div>
            <button>back</button>
            <span>{`< ${props.index + 1} / 6 >`}</span>
            <button>next</button>
        </div>
    )

}

export default Controls;