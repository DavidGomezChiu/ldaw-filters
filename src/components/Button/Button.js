import React from 'react';
import './Button.scss';

const Button = ({label, color, action}) => {
    return (
        <div onClick={action} className={"button-container "+color}>
            <p>{label? label : ''}</p>
        </div>
    );
}

export default Button;
