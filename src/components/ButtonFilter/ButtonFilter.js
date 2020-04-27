import React, {useState, useEffect} from 'react';
import './ButtonFilter.scss';

import ButtonImage from '../ButtonImage/ButtonImage'

const ButtonFilter = ({title, buttons, tooltip, change}) => {
    let [buttonList, setButtonList] = useState([]);
    let [clicked, setClicked] = useState('');
    // <ButtonImage key="1" source="imperfecciones-10x.png" label="prueba"></ButtonImage>
    useEffect(() => {
        console.log('useEffect');
        if(buttons !== undefined){
            setButtonList(buttons);
        }
    },[]);

    const handleClick = (clicked) => {
        setClicked(clicked)
        change({title,value:clicked});
    }

    return (
        <div>
            <p className="title mb-2">
                {title ? title : ''}
            </p>
            <div className="container">
                <div className="row">
                    {!buttonList.includes(undefined) && buttonList.length > 0 ?
                        buttonList.map((button, index) => <ButtonImage clicked={clicked == button.label? true : false} key={index} onClick={() => handleClick(button.label)} source={button.source} label={button.label}></ButtonImage>)
                        :
                        ''}
                </div>
            </div>
        </div>
    );
}

export default ButtonFilter;
