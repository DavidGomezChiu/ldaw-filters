import React from 'react';
import './ButtonImage.scss';

// <img alt="prueba" src={process.env.PUBLIC_URL+'/assets/img/Claridad/imperfecciones-10x.png'}></img>

const ButtonImage = ({ source, label }) => {
    return (
        <div className="button-image px-4 py-1">
            <div className="vertical-align">
                <img className="button-img" alt={label? label : 'No data'} src={process.env.PUBLIC_URL+'/assets/img/'+source}></img>
                <p className="button-label">{label? label : 'No data'}</p>
            </div>
        </div>
    );
}

export default ButtonImage;
