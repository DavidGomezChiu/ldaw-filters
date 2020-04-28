import React, {useState, useEffect} from 'react';
import './ButtonFilter.scss';

import ButtonImage from '../ButtonImage/ButtonImage'

const ButtonFilter = ({title, buttons, tooltip, change, needsCleaning, onClean}) => {
    let [buttonList, setButtonList] = useState([]);
    let [clicked, setClicked] = useState('');
    let [clean, setClean] = useState(false);

    useEffect(() => {
        if(buttons !== undefined){
            setButtonList(buttons);
        }
    },[]);

    useEffect(() => {
        console.log('clean '+title);
        if(needsCleaning !== undefined){
            setClean(!needsCleaning);
            if(needsCleaning){
                handleClean();
            }
        }
    },[needsCleaning]);

    const handleClean = () => {
        setClicked('')
        setClean(false)
        onClean(title)
    };

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
                        buttonList.map((button, index) => <ButtonImage total={buttonList.length} clicked={clicked == button.label? true : false} key={index} onClick={() => handleClick(button.label)} source={button.source} label={button.label}></ButtonImage>)
                        :
                        ''}
                </div>
            </div>
        </div>
    );
}

export default ButtonFilter;
