import React from 'react'
import Card from './Card'
import Controls from './Controls'

class CardContainer extends React.Component {
    render() {
        return (
            <div>
                <Card />
                <Controls />
            </div>
        )
    }
}

export default CardContainer;