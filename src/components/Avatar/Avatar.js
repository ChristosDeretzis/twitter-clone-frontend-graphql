import React from 'react';
import  './Avatar.css';

const Avatar = (props) => {
    return (
        <img 
            className="Avatar"
            src={props.src}
            alt={props.alt} />
    )
}

export default Avatar;