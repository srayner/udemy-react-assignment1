import React from 'react';

const UserOutput = (props) => {
    
    const style = {
        'fontColor': 'blue'
    }

    return (
        
        <div style={style}>
            <p>Your username is {props.username}.</p>
            <p>This is the description.</p>
        </div>
    )
}

export default UserOutput;