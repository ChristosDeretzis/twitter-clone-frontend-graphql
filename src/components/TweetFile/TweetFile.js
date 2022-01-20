import React from 'react';
import  './TweetFile.css';

const TweetFile = (props) => {
    return (
        <img 
            className="TweetFile"
            src={props.src}
            alt={props.alt} />
    )
}

export default TweetFile;