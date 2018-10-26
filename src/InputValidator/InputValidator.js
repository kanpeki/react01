import React from 'react';

const InputValidator = (props) => {
    let ret = props.counter < 5 ? 
        <p>Text too short</p> :
        <p>Text too long</p>;
    return ret;
};

export default InputValidator;