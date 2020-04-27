import React, {useState} from 'react';
import './Filters.scss'

import ButtonFilter from '../../components/ButtonFilter/ButtonFilter'
import RangeFilter from '../../components/RangeFilter/RangeFilter'
import Button from '../../components/Button/Button'

const Filters = () => {
    let [shapeButtons, setShapeButtons] = useState([
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
    ]);
    
    let [colorButtons, setColorButtons] = useState([
        {source:"Color/incoloro.png", label:"Transparente"},
        {source:"Color/casi-incoloro.png", label:"Casi incoloro"},
        {source:"Color/ligeramente-amarillo.png", label:"Ligeramente amarillo"},
        {source:"Color/amarillo-claro.png", label:"Amarillo claro"}
    ]);
    
    let [claridadButtons, setClaridadButtons] = useState([
        {source:"Claridad/perfecta.png", label:"Perfecta"},
        {source:"Claridad/imperfecciones-no-visibles.png", label:"Imperfecciones no visibles"},
        {source:"Claridad/imperfecciones-10x.png", label:"Imperfecciones visibles a 10X"},
        {source:"Claridad/imperfecciones-simple-vista.png", label:"Imperfecciones visibles a simple vista"}
    ]);
    
    let [corteButtons, setCorteButtons] = useState([
        {source:"Corte/excelente.png", label:"Excelente"},
        {source:"Corte/muy-bueno.png", label:"Muy bueno (muy brillante)"},
        {source:"Corte/bueno.png", label:"Bueno (brillante)"},
        {source:"Corte/regular.png", label:"Regular (poco brillante)"}
    ]);

    const handleOnSubmit = () => {
        console.log('submit');
    };

    const handleOnClean = () => {
        console.log('clean!');
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <div className="col">
                                <ButtonFilter title="Forma" buttons={shapeButtons}></ButtonFilter>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <ButtonFilter title="Color" buttons={colorButtons}></ButtonFilter>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <ButtonFilter title="Claridad" buttons={claridadButtons}></ButtonFilter>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col">
                                <ButtonFilter title="Corte" buttons={corteButtons}></ButtonFilter>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <RangeFilter title="Quilataje" tooltip="" from="0" to="30" imageFrom="Quilataje/pequeno.png" imageTo="Quilataje/grande.png"></RangeFilter>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <RangeFilter title="Precio" tooltip="" from="200" to="5000" imageFrom="" imageTo=""></RangeFilter>
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
