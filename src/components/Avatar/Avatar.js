import React from 'react';
import  './Avatar.css';

const Avatar = (props) => {
    const className = props.className ? props.className : "Avatar";
    return (
        <img 
            className={className}
            src={props.src}
            alt={props.alt} />
    )
}

export default Avatar;