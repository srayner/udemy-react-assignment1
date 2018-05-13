import React from 'react';
import './UserInput.css';

const userInput = (props) => {
    return (
        <input className="UserInput" onChange={props.change} type="text" value={props.username}/>
    )
}

export default userInput;