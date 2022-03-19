import React from 'react';
import  './CoverPhoto.css';

const CoverPhoto = (props) => {
    return (
        <img 
            className="CoverPhoto"
            src={props.src}
            alt={props.alt} />
    )
}

export default CoverPhoto;