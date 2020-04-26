import React, {useState, useEffect} from 'react';
import './ButtonFilter.scss';

import ButtonImage from '../ButtonImage/ButtonImage'

const ButtonFilter = ({title, buttons, tooltip}) => {
    let [buttonList, setButtonList] = useState([]);
    // <ButtonImage key="1" source="imperfecciones-10x.png" label="prueba"></ButtonImage>
    useEffect(() => {
        if(buttons !== undefined){
            setButtonList(buttons);
        }
    },[]);

    return (
        <div>
            <p className="title">
                {title ? title : ''}
            </p>
            {!buttonList.includes(undefined) && buttonList.length > 0 ?
                //console.log(buttonList)
                buttonList.map((button, index) => <ButtonImage key={index} source={button.source} label={button.label}></ButtonImage>)
                :
                ''}
        </div>
    );
}

export default ButtonFilter;
