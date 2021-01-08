import React, {useState} from 'react';

const Card = (props) => {
    const [flip, setFlip] = useState(true)

    return (
        <div className='flip_container' onClick={() => setFlip(!flip)}>
            <div className={
                `front card_face flex_container ${flip?'visible':'hidden'}`}>
                    <p>{props.front}</p>
            </div>
            <div className={`back flex_container card_face ${flip?'hidden':'visible'}`}>
                <p>{props.def}</p>  
            </div>
        </div>
    )
}


export default Card;