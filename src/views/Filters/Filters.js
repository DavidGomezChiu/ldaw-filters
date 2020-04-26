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

    return (
        <div>
            <h2>Filtros</h2>
            <ButtonFilter title="Forma" buttons={shapeButtons}></ButtonFilter>
            <ButtonFilter title="Color" buttons={colorButtons}></ButtonFilter>
            <ButtonFilter title="Claridad" buttons={claridadButtons}></ButtonFilter>
            <ButtonFilter title="Corte" buttons={corteButtons}></ButtonFilter>
            <RangeFilter></RangeFilter>
            <RangeFilter></RangeFilter>
            <Button></Button>
            <Button></Button>
        </div>
    );
}

export default Filters;
