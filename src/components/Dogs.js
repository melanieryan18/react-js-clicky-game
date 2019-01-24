import React from 'react';

function Dogs(props) {
    return (
        <div style={{ backgroundImage: `url(${props.image})` }}
            className="square col-md-4"
            onClick={() => props.handleClick(props.id)}>
        </div>
    )
}

export default Dogs;