import React from 'react';
import './ButtonImage.scss';

const ButtonImage = ({ source, label, onClick, clicked, total }) => {
    const getWidth = () => {
        if(total > 6){
            total = total / 2;
        }
        return total;
    }

    return (
        <div onClick={onClick} style={{width: (100/getWidth())+"%"}} className={"button-image py-1 d-flex "+(clicked?'clicked':'')}>
            <div className="vertical-align">
                <img className="button-img" alt={label? label : 'No data'} src={process.env.PUBLIC_URL+'/assets/img/'+source}></img>
                <p className="button-label">{label? label : 'No data'}</p>
            </div>
        </div>
    );
}

export default ButtonImage;
