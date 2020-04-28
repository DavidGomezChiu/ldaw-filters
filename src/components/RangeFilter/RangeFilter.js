import React, {useState, useEffect} from 'react';
import './RangeFilter.scss';

import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

const RangeFilter = ({title, tooltip, from, to, imageFrom, imageTo, change, step, needsCleaning, onClean}) => {
    const [range, setRange] = useState({min: 0, max: 20})
    const [value, setValue] = useState({min: 0, max: 20})
    let [clean, setClean] = useState(false);

    useEffect(() => {
        if(from && from !== '' && to && to !== ''){
            let newMin = parseInt(from);
            let newMax = parseInt(to);

            setValue({min: newMin, max: newMax})
            setRange({min: newMin, max: newMax})
            console.log(value);
            console.log(range);
            handleChange({value: {min: newMin, max: newMax}});
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
        setValue({min: range.min, max: range.max});
        setClean(false)
        onClean(title)
    };

    const handleChange = (newValue) => {
        if(newValue.value){
            setValue(newValue.value);
        }else{
            setValue(newValue);
        }
        change({title,value})
    }

    const setMin = (received) => {
        if(received !== ''){
            let newMin =  parseFloat(received);
            if(newMin < range.min){
                newMin = range.min;
            }
            if(newMin >= value.max){
                newMin = value.max - 1;
            }
            handleChange({min: newMin, max: value.max});
        }
    }
    
    const setMax = (received) => {
        if(received !== ''){
            let newMax = parseFloat(received);
            if(newMax > range.max){
                newMax = range.max
            }
            if(newMax <= value.min){
                newMax = value.min + 1;
            }
            handleChange({min: value.min, max: newMax});
        }
    }

    return (
        <div>
            <p className="title">
                {title ? title : ''}
            </p>
            <div className="container">
                <div className="row">
                    <div className="col-6 text-left image-container">
                        {imageFrom ?
                            <img className="button-img" alt={imageFrom? imageFrom : 'No data'} src={process.env.PUBLIC_URL+'/assets/img/'+imageFrom}></img>
                            :
                            ''
                        }
                    </div>
                    <div className="col-6 text-right image-container">
                        {imageTo ?
                            <img className="button-img" alt={imageTo? imageTo : 'No data'} src={process.env.PUBLIC_URL+'/assets/img/'+imageTo}></img>
                            :
                            ''
                        }
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col">
                        <InputRange formatLabel={value => ''} onChange={handleChange} step={step} maxValue={range.max} minValue={range.min} value={value}></InputRange>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 text-left">
                        <input onChange={(e) => {setMin(e.target.value)}} value={value.min} min={range.min} max={range.max-1} type="number" className="range-inputs min-input"></input>
                    </div>
                    <div className="col-6 text-right">
                        <input onChange={(e) => {setMax(e.target.value)}} value={value.max} min={range.min+1} max={range.max} type="number" className="range-inputs max-input"></input>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RangeFilter;
