import React from 'react';

import ResultRow from "./ResultRow";

import './FilterResult.css';

const FilterResult = (props:{buses:string[]}) => {
    return (
        <div className="result-container container">
            {props.buses.map((bus:any) => {
                return <ResultRow key={Math.random()}/>
            })}
        </div>
    )
}

export default FilterResult;