import React from 'react';

class Controls extends React.Component {
    render() {
        return (
            <div>
                <button>back</button>
                <span>{'< 1 / 6 >'}</span>
                <button>next</button>
            </div>
        )
    }
}

export default Controls;