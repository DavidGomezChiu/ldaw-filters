import React from 'react';
import './Filters.scss'

import ButtonFilter from '../../components/ButtonFilter/ButtonFilter'
import RangeFilter from '../../components/RangeFilter/RangeFilter'
import Button from '../../components/Button/Button'

const Filters = () => {
    return (
        <div>
            <h2>Filtros</h2>
            <ButtonFilter></ButtonFilter>
            <ButtonFilter></ButtonFilter>
            <ButtonFilter></ButtonFilter>
            <ButtonFilter></ButtonFilter>
            <RangeFilter></RangeFilter>
            <RangeFilter></RangeFilter>
            <Button></Button>
            <Button></Button>
        </div>
    );
}

export default Filters;
