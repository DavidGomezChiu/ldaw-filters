import React, {useState} from 'react';
import './Filters.scss'

import ButtonFilter from '../../components/ButtonFilter/ButtonFilter'
import RangeFilter from '../../components/RangeFilter/RangeFilter'
import Button from '../../components/Button/Button'

const initialForma = [
    {source:"Forma/redondo.png", label:"Redondo"},
    {source:"Forma/princesa.png", label:"Princesa"},
    {source:"Forma/esmeralda.png", label:"Esmeralda"},
    {source:"Forma/ovalo.png", label:"Óvalo"},
    {source:"Forma/marquesa.png", label:"Marquesa"},
    {source:"Forma/pera.png", label:"Pera"},
    {source:"Forma/asscher.png", label:"Asscher"},
    {source:"Forma/corazon.png", label:"Corazón"},
    {source:"Forma/cojin.png", label:"Cojín"},
    {source:"Forma/baguette.png", label:"Baguette"},
    {source:"Forma/trillon.png", label:"Trillón"},
    {source:"Forma/radiante.png", label:"Radiante"}
];

const initialColor = [
    {source:"Color/incoloro.png", label:"Transparente"},
    {source:"Color/casi-incoloro.png", label:"Casi incoloro"},
    {source:"Color/ligeramente-amarillo.png", label:"Ligeramente amarillo"},
    {source:"Color/amarillo-claro.png", label:"Amarillo claro"}
];

const initialClaridad = [
    {source:"Claridad/perfecta.png", label:"Perfecta"},
    {source:"Claridad/imperfecciones-no-visibles.png", label:"Imperfecciones no visibles"},
    {source:"Claridad/imperfecciones-10x.png", label:"Imperfecciones visibles a 10X"},
    {source:"Claridad/imperfecciones-simple-vista.png", label:"Imperfecciones visibles a simple vista"}
];

const initialCorte = [
    {source:"Corte/excelente.png", label:"Excelente"},
    {source:"Corte/muy-bueno.png", label:"Muy bueno (muy brillante)"},
    {source:"Corte/bueno.png", label:"Bueno (brillante)"},
    {source:"Corte/regular.png", label:"Regular (poco brillante)"}
];

const Filters = () => {
    let [filter, setFilter] = useState({});

    let [shapeButtons, setShapeButtons] = useState(initialForma);
    let [colorButtons, setColorButtons] = useState(initialColor);
    let [claridadButtons, setClaridadButtons] = useState(initialClaridad);
    let [corteButtons, setCorteButtons] = useState(initialCorte);

    let [shapeNeedsCleaning, setShapeNeedsCleaning] = useState(false);
    let [colorNeedsCleaning, setColorNeedsCleaning] = useState(false);
    let [claridadNeedsCleaning, setClaridadNeedsCleaning] = useState(false);
    let [corteNeedsCleaning, setCorteNeedsCleaning] = useState(false);
    let [quilatajeNeedsCleaning, setQuilatajeNeedsCleaning] = useState(false);
    let [precioNeedsCleaning, setPrecioNeedsCleaning] = useState(false);

    const handleOnSubmit = () => {
        console.log('Getting:');
        console.log(filter);
    };

    const handleOnClean = () => {
        console.log('Filters cleaned!');
        // Intento de resetear filtros
        setShapeButtons(initialForma);
        setColorButtons(initialColor);
        setClaridadButtons(initialClaridad);
        setCorteButtons(initialCorte);
        setFilter({});
        
        setShapeNeedsCleaning(true)
        setColorNeedsCleaning(true)
        setClaridadNeedsCleaning(true)
        setCorteNeedsCleaning(true)
        setQuilatajeNeedsCleaning(true)
        setPrecioNeedsCleaning(true)
    };

    const handleHasBeenCleaned = (title) => {
        switch(title){
            case 'Forma':
                setShapeNeedsCleaning(false);
                break;
            case 'Color':
                setColorNeedsCleaning(false);
                break;
            case 'Claridad':
                setClaridadNeedsCleaning(false);
                break;
            case 'Corte':
                setCorteNeedsCleaning(false)
                break;
            case 'Quilataje':
                setQuilatajeNeedsCleaning(false)
                break;
            case 'Precio':
                setPrecioNeedsCleaning(false)
                break;
            default:
                break;
        }
    }

    const handleOnChange = (change) => {
        let newFilter = Object.assign({},filter);
        newFilter[change.title.toLowerCase()] = change.value;
        setFilter(newFilter);
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <div className="col">
                                <ButtonFilter needsCleaning={shapeNeedsCleaning} onClean={handleHasBeenCleaned} change={handleOnChange} title="Forma" buttons={shapeButtons}></ButtonFilter>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <ButtonFilter needsCleaning={colorNeedsCleaning} onClean={handleHasBeenCleaned} change={handleOnChange} title="Color" buttons={colorButtons}></ButtonFilter>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <ButtonFilter needsCleaning={claridadNeedsCleaning} onClean={handleHasBeenCleaned} change={handleOnChange} title="Claridad" buttons={claridadButtons}></ButtonFilter>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col">
                                <ButtonFilter needsCleaning={corteNeedsCleaning} onClean={handleHasBeenCleaned} change={handleOnChange} title="Corte" buttons={corteButtons}></ButtonFilter>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <RangeFilter needsCleaning={quilatajeNeedsCleaning} onClean={handleHasBeenCleaned} change={handleOnChange} title="Quilataje" tooltip="" from="0" to="30" step={0.01} imageFrom="Quilataje/pequeno.png" imageTo="Quilataje/grande.png"></RangeFilter>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <RangeFilter needsCleaning={precioNeedsCleaning} onClean={handleHasBeenCleaned} change={handleOnChange} title="Precio" tooltip="" from="200" to="5000" step={1} imageFrom="" imageTo=""></RangeFilter>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col text-right">
                        <Button label="Buscar" action={handleOnSubmit} color="primary"></Button>
                    </div>
                    <div className="col text-left">
                        <Button label="Limpiar filtros" action={handleOnClean} color="secondary"></Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filters;
