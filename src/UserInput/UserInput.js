import React from 'react';

const UserInput = (props) => {
    return (
        <div>
            <input type="text" value={props.value} onChange={props.changed}/>
        </div>
    );
};

export default (UserInput);