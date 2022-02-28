import React from 'react';
import './CustomResponse.css';

const CustomResponse = (props) => {
    return (
        <div className="wrapper">
            {props.text}
        </div>
    )
};

export default CustomResponse;